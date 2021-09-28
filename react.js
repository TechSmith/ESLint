(function () {
   var reactRules = require('./react-rules');

   module.exports = {
      extends: 'plugin:react/recommended',
      plugins: ['react-hooks'],
      rules: reactRules,
      settings: {
         react: {
            version: "detect"
         }
      }
   };
}());
