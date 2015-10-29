import webpack from "webpack";
import path from "path";

export default {
    devtool: "eval",
    entry: [
        "webpack-dev-server/client?http://localhost:3000",
        "webpack/hot/only-dev-server",
        "./src/index"
    ],
    output: {
        path: path.join(__dirname, "dist"),
        filename: "bundle.min.js",
        publicPath: "/dist/"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
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
                loaders: [ "json" ],
                exclude: /node_modules/
            }
        ]
    }
};
