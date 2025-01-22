const getTscLintingConfig = require('./index');
const globals = require('globals');

module.exports = getTscLintingConfig(['node_modules/*'], globals.node);