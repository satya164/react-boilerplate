const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const opn = require("opn");
const config = require("./webpack.config");

const host = "localhost";
const port = 3000;

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(port, host, function(err, result) {
    if (err) {
        console.error(err);
    }

    opn("http://" + host + ":" + port);

    console.log("Listening at " + host + ":" + port);
});
