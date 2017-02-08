(function () {
   var commonRules = require('./common-rules');
   var error = function () {
      return ['error'].concat(Array.prototype.slice.call(arguments));
   };

   module.exports = {
      env: {
         browser: true
      },
      extends: 'eslint:recommended',
      rules: commonRules
   };
}());
