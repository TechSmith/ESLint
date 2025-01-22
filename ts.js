var commonRules = require('./common-rules');


module.exports = {
   env: {
      browser: true,
      es6: true
   },
   parser: '@typescript-eslint/parser',
   parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module'
   },
   plugins: [
      'eslint-plugin-prefer-arrow',
      '@typescript-eslint'
   ],
   rules: {...commonRules, ...typescriptRules}
};