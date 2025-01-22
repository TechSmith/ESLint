const commonRules = require('./common-rules');

module.exports = {
   env: {
      browser: true,
      es6: true
   },
   parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
         jsx: true
      }
   },
   plugins: [
      'eslint-plugin-prefer-arrow',
   ],
   rules: commonRules
};