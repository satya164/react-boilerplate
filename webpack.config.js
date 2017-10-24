/* eslint-disable import/no-commonjs */

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');

const PORT = 3000;

const babelrc = JSON.parse(
  fs.readFileSync(path.join(__dirname, '.babelrc'), 'utf-8').toString()
);

const entry = ['./src/index.js'];

module.exports = (env = { NODE_ENV: 'development' }) => ({
  devtool: 'source-map',
  entry:
    env.NODE_ENV === 'production'
      ? entry
      : [
          `webpack-dev-server/client?http://localhost:${PORT}`,
          'webpack/hot/only-dev-server',
          ...entry,
        ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env.NODE_ENV) },
    }),
  ].concat(
    env.NODE_ENV === 'production'
      ? [
          new webpack.LoaderOptionsPlugin({ minimize: true, debug: false }),
          new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            sourceMap: true,
          }),
          new webpack.optimize.ModuleConcatenationPlugin(),
        ]
      : [
          new webpack.HotModuleReplacementPlugin(),
          new webpack.NamedModulesPlugin(),
          new webpack.NoEmitOnErrorsPlugin(),
        ]
  ),
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: Object.assign({}, babelrc, {
            presets: babelrc.presets.map(
              p => (p === 'env' ? ['env', { modules: false }] : p)
            ),
          }),
        },
      },
      {
        test: /\.(bmp|gif|jpg|jpeg|png|svg|webp|ttf|otf)$/,
        use: { loader: 'url-loader', options: { limit: 25000 } },
      },
    ],
  },
  devServer: {
    contentBase: 'static/',
    hot: true,
    port: PORT,
  },
});
