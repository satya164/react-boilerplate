/* @flow */

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

document.addEventListener('readystatechange', () => {
  if (document.readyState === 'complete') {
    ReactDOM.render(<App />, document.getElementById('root'));
  }
});
