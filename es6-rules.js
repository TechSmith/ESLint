(function() {
   var error = function () {
      return ['error'].concat(Array.prototype.slice.call(arguments));
   };

   module.exports = {
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
}());
