import gulp from "gulp";
import gutil from "gulp-util";
import del from "del";
import opn from "opn";
import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import config from "./webpack.config";

gulp.task("webpack", cb =>
    webpack(config, (err, stats) => {
        if (err) {
            throw new gutil.PluginError("webpack", err);
        }

        gutil.log("[webpack]", stats.toString());

        cb();
    })
);

gulp.task("server", () => {
    new WebpackDevServer(webpack(config), {
        hot: true,
        publicPath: config.output.publicPath,
        stats: {
            colors: true,
            progress: true
        }
    }).listen(8080, "localhost", err => {
        if (err) {
            throw new gutil.PluginError("webpack-dev-server", err);
        }

        const server = "http://localhost:8080/webpack-dev-server/index.html";

        // Server listening
        gutil.log("[webpack-dev-server]", server);

        opn(server);
    });
});

gulp.task("scripts", [ "webpack" ]);

gulp.task("scripts:watch", () => {
    gulp.start("server");
});

// Clean up generated files
gulp.task("clean", () => del("dist/"));

gulp.task("watch", [ "scripts:watch" ]);

// Build files
gulp.task("build", [ "scripts" ]);

// Default Task
gulp.task("default", [ "clean" ], () => gulp.start("build"));

