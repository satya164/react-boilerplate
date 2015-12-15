const __DEV__ = process.env.NODE_ENV !== "production";

const webpack = require("webpack");
const path = require("path");

const plugins = [
	new webpack.EnvironmentPlugin("NODE_ENV")
];

module.exports = {
    devtool: "source-map",
    entry: [
        "./src/index"
    ],
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
                loaders: [ "eslint-loader" ],
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: __DEV__ ? [ "react-hot", "babel" ] : [ "babel" ],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    }
};
