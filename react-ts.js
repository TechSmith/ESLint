const reactRules = require('./react-rules');
const reactTsRules = {
   'react/prop-types': 'off'
};

module.exports = {
   extends: 'plugin:react/recommended',
   plugins: ['react-hooks'],
   rules: {...reactRules, ...reactTsRules},
   settings: {
      react: {
         version: "detect"
      }
   }
};