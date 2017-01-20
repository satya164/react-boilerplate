import 'source-map-support/register';
import 'babel-polyfill';
import koa from 'koa';
import route from 'koa-route';
import mount from 'koa-mount';
import serve from 'koa-static';
import webpack from 'webpack';
import webpackDevMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ServerHTML from './ServerHTML';
import App from './App';
import webpackConfig from '../webpack.config';

const app = koa();

app.listen(8008);

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
  }));

  app.use(webpackHotMiddleware(compiler));
}

app.use(mount('/dist', serve('dist'), { defer: true }));
app.use(route.get('/', function *() {
  this.body = '<!DOCTYPE html>' + ReactDOMServer.renderToStaticMarkup(
        <ServerHTML
          locale='en'
          title='React Bolierplate'
          description='Simple boilerplate for React'
          body={ReactDOMServer.renderToString(<App radiumConfig={{ userAgent: this.headers['user-agent'] }} />)}
        />
    );
}));
