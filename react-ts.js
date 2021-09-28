(function () {
   var reactRules = require('./react-rules');
   var reactTsRules = {
      'react/prop-types': 'off'
   };

   module.exports = {
      extends: 'plugin:react/recommended',
      plugins: ['react-hooks'],
      rules: Object.assign({}, reactRules, reactTsRules),
      settings: {
         react: {
            version: "detect"
         }
      }
   };
}());
