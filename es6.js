(function () {
   var commonRules = require('./common-rules');
   var error = function () {
      return ['error'].concat(Array.prototype.slice.call(arguments));
   };

   var es6Rules = {
      'arrow-parens': error('as-needed'),
      'arrow-spacing': error(),
      'generator-star-spacing': error(),
      'no-confusing-arrow': error(),
      'no-duplicate-imports': error(),
      'no-useless-computed-key': error(),
      'no-useless-constructor': error(),
      'no-useless-rename': error(),
      'no-var': error(),
      'object-shorthand': error('consistent-as-needed'),
      'prefer-arrow-callback': error(),
      'prefer-const': error(),
      'prefer-rest-params': error(),
      'prefer-spread': error(),
      'prefer-template': error(),
      'rest-spread-spacing': error(),
      'template-curly-spacing': error(),
      'yield-star-spacing': error(),
      'jsx-quotes': error()
   };

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
