const __DEV__ = process.env.NODE_ENV !== "production";

const webpack = require("webpack");
const path = require("path");
const fs = require("fs");

const plugins = [
    new webpack.EnvironmentPlugin("NODE_ENV")
];

const entry = [
    "./src/index"
];

const babelrc = JSON.parse(fs.readFileSync(path.join(__dirname, ".babelrc"), "utf-8").toString());

module.exports = {
    devtool: "source-map",
    entry: __DEV__ ? [ ...entry, "webpack-hot-middleware/client" ] : [ ...entry ],
    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.min.js",
        sourceMapFilename: "bundle.min.js.map"
    },
    plugins: __DEV__ ? [ ...plugins, new webpack.HotModuleReplacementPlugin() ] : [ ...plugins, new webpack.optimize.UglifyJsPlugin() ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loader: "babel",
                exclude: /node_modules/,
                query: Object.assign({}, babelrc, {
                    env: {
                        developement: {
                            presets: [ "react-hmre" ],
                        },
                    }
                })
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    }
};
