/* global module, require */

if (__DEV__) {
    module.exports = require("./RootContainer.dev");
} else {
    module.exports = require("./RootContainer.prod");
}
