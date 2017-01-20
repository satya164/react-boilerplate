/* eslint-disable import/no-commonjs */

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./RootContainer.prod');
} else {
  module.exports = require('./RootContainer.dev');
}
