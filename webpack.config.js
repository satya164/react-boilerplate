/* eslint-disable import/no-commonjs */

const webpack = require('webpack');
const path = require('path');
const fs = require('fs');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const babelrc = JSON.parse(fs.readFileSync(path.join(__dirname, '.babelrc'), 'utf-8').toString());

module.exports = (env = { NODE_ENV: 'development' }) => ({
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: 'dist/',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(env.NODE_ENV) },
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
    }),
  ].concat(env.NODE_ENV === 'production' ? [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      sourceMap: true,
    }),
  ] : [
    new webpack.HotModuleReplacementPlugin(),
  ]),
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          publicPath: '/dist',
          fallbackLoader: 'style-loader',
          loader: [
            'css-loader?modules&importLoaders=2&localIdentName=[local]___[hash:base64:5]',
            'postcss-loader',
            'sass-loader?sourceMap',
          ],
        }),
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: Object.assign({}, babelrc, {
              presets: babelrc.presets.map(p => p === 'es2015' ? [ 'es2015', { modules: false } ] : p),
              env: {
                developement: {
                  presets: [ 'react-hmre' ],
                },
              },
            }),
          },
        ],
      },
    ],
  },
  devServer: {
    contentBase: 'static/',
    port: 3000,
  },
});
