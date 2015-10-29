import webpack from "webpack";
import path from "path";

const plugins = [
    new webpack.HotModuleReplacementPlugin()
];

if (process.env.NODE_ENV === "production") {
    plugins.push(new webpack.optimize.UglifyJsPlugin());
}

export default {
    devtool: "source-map",
    entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        "./src/index"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        publicPath: "/dist/",
        filename: "bundle.min.js",
        sourceMapFilename: "bundle.min.js.map"
    },
    plugins,
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js$/,
                loaders: [ "react-hot", "babel" ],
                exclude: /node_modules/
            },
            {
                test: /\.json$/,
                loader: "json",
                exclude: /node_modules/
            }
        ]
    }
};
