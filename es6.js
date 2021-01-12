(function () {
   var commonRules = require('./common-rules');
   var es6Rules = require('./es6-rules');

   module.exports = {
      env: {
         browser: true,
         es6: true
      },
      extends: 'eslint:recommended',
      parserOptions: {
         ecmaVersion: 6,
         sourceType: 'module',
         ecmaFeatures: {
            jsx: true
         }
      },
      rules: Object.assign({}, commonRules, es6Rules)
   };
}());
