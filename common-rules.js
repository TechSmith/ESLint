(function() {
   var error = function () {
      return ['error'].concat(Array.prototype.slice.call(arguments));
   };

   module.exports = {
      'no-console': error(),
      'no-unsafe-negation': error(),
      'curly': error('all'),
      'dot-location': error('property'),
      'dot-notation': error(),
      'eqeqeq': error('always'),
      'indent': error(3, {
         'SwitchCase': 1
      }),
      'quotes': error('single', {
         avoidEscape: true
      }),
      'semi': error('always'),
      'strict': error('function'),
      'array-callback-return': error(),
      'block-scoped-var': error(),
      'consistent-return': error(),
      'no-alert': error(),
      'no-else-return': error(),
      'no-empty-function': error(),
      'no-eval': error(),
      'no-extend-native': error(),
      'no-global-assign': error(),
      'no-implicit-globals': error(),
      'no-implied-eval': error(),
      'no-iterator': error(),
      'no-labels': error(),
      'no-lone-blocks': error(),
      'no-loop-func': error(),
      'no-magic-numbers': error({
         ignoreArrayIndexes: true,
         ignore: [-1, 0, 1, 2, 10, 60, 100, 1000]
      }),
      'no-multi-spaces': error(),
      'no-multi-str': error(),
      'no-new-func': error(),
      'no-new-wrappers': error(),
      'no-new': error(),
      'no-octal-escape': error(),
      'no-proto': error(),
      'no-return-assign': error(),
      'no-sequences': error(),
      'no-throw-literal': error(),
      'no-unmodified-loop-condition': error(),
      'no-unused-expressions': error({
         allowShortCircuit: true,
         allowTernary: true
      }),
      'no-useless-call': error(),
      'no-useless-concat': error(),
      'no-useless-escape': error(),
      'no-useless-return': error(),
      'no-void': error({allowAsStatement: true}),
      'no-with': error(),
      'radix': error(),
      'vars-on-top': error(),
      'wrap-iife': error('any'),
      'no-shadow': error(),
      'no-undef-init': error(),
      'no-undefined': error(),
      'no-use-before-define': error(),
      'array-bracket-spacing': error('never'),
      'brace-style': error(),
      'camelcase': error(),
      'comma-dangle': error(),
      'comma-spacing': error(),
      'comma-style': error(),
      'computed-property-spacing': error(),
      'func-call-spacing': error(),
      'func-names': error('never'),
      'func-style': error(),
      'key-spacing': error(),
      'keyword-spacing': error(),
      'max-statements-per-line': error(),
      'new-cap': error(),
      'new-parens': error(),
      'no-array-constructor': error(),
      'no-bitwise': error(),
      'no-lonely-if': error(),
      "no-mixed-operators": [
         "error",
         {
            "groups": [
               ["&", "|", "^", "~", "<<", ">>", ">>>"],
               ["==", "!=", "===", "!==", ">", ">=", "<", "<="],
               ["&&", "||"],
               ["in", "instanceof"]
            ],
            "allowSamePrecedence": true
         }
      ],
      'no-multi-assign': error(),
      'no-multiple-empty-lines': error(),
      'no-nested-ternary': error(),
      'no-new-object': error(),
      'no-tabs': error(),
      'no-trailing-spaces': error({skipBlankLines: true}),
      'no-unneeded-ternary': error(),
      'no-whitespace-before-property': error(),
      'object-curly-spacing': error(),
      'one-var': error('never'),
      'padded-blocks': error({
         blocks: 'never',
         classes: 'never',
         switches: 'never'
      }),
      'quote-props': error('as-needed'),
      'semi-spacing': error(),
      'space-before-blocks': error(),
      'space-before-function-paren': error({
         'anonymous': 'never',
         'asyncArrow': 'always',
         'named': 'never'
      }),
      'space-in-parens': error(),
      'space-infix-ops': error(),
      'space-unary-ops': error(),
      'unicode-bom': error(),
      'no-invalid-this': 'error',
      'no-caller': 'error',
      'id-match': 'error',
      'id-denylist': [
         'error',
         'any',
         'Number',
         'number',
         'String',
         'string',
         'Boolean',
         'boolean',
         'Undefined',
         'undefined'
      ],
      'id-blacklist': [ // deprecated
         'error',
         'any',
         'Number',
         'number',
         'String',
         'string',
         'Boolean',
         'boolean',
         'Undefined',
         'undefined'
      ],
      'guard-for-in': 'error',
      'spaced-comment': [
         'error',
         'always',
         {
            'markers': [
               '/'
            ]
         }
      ]
   };
}());
