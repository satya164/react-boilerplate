import gulp from "gulp";
import browserify from "browserify";
import watchify from "watchify";
import babelify from "babelify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import gutil from "gulp-util";
import plumber from "gulp-plumber";
import notify from "gulp-notify";
import sourcemaps from "gulp-sourcemaps";
import rename from "gulp-rename";
import eslint from "gulp-eslint";
import uglify from "gulp-uglify";
import del from "del";

const errorHandler = notify.onError("Error: <%= error.message %>");

// Make browserify bundle
function bundle(file, options, cb) {
    var base, bundler, watcher, opts;

    opts = options || {};

    opts.entries = "./" + file;
    opts.debug = typeof opts.debug === "boolean" ? opts.debug : true;

    if (bundle.watch) {
        opts.cache = {};
        opts.packageCache = {};
        opts.fullPaths = true;
    }

    bundler = browserify(opts);

    base = file.split(/[\\/]/).pop();

    if (bundle.watch) {
        watcher = watchify(bundler);

        cb(
            watcher
            .on("update", () => {
                gutil.log(`Starting '${gutil.colors.yellow(file)}'...`);

                cb(
                    watcher.bundle()
                    .on("error", errorHandler)
                    .pipe(source(base))
                    .pipe(buffer())
                );
            })
            .on("time", time => gutil.log(`Finished '${gutil.colors.yellow(file)}' after ${gutil.colors.magenta(time + " ms")}`))
            .bundle()
            .pipe(source(base))
            .pipe(buffer())
        );
    } else {
        cb(
            bundler.bundle()
            .on("error", function(error) {
                errorHandler(error);

                // End the stream to prevent gulp from crashing
                this.end();
            })
            .pipe(source(base))
            .pipe(buffer())
        );
    }
}

gulp.task("lint", () =>
    gulp.src("src/**/*.js")
    .pipe(plumber({ errorHandler }))
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
);

gulp.task("bundle", () =>
    bundle("src/app.js", {
        transform: [ babelify ]
    }, bundled => bundled
        .pipe(plumber({ errorHandler }))
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(gutil.env.production ? uglify() : gutil.noop())
        .pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("dist"))
    )
);

gulp.task("scripts", [ "bundle" ]);

gulp.task("scripts:watch", function() {
    bundle.watch = true;

    gulp.start("scripts");

    gulp.watch("src/js/**/*.js", [ "lint" ]);
});

// Clean up generated files
gulp.task("clean", () => del("dist/"));

gulp.task("watch", [ "scripts:watch" ]);

// Build files
gulp.task("build", [ "scripts" ]);

// Default Task
gulp.task("default", [ "lint" ], () => gulp.start("build"));

