const reactRules = require('./react-rules');

module.exports = {
   plugins: ['react-hooks'],
   rules: reactRules,
   settings: {
      react: {
         version: "detect"
      }
   }
};