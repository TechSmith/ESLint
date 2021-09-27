(function () {
   var commonRules = require('./common-rules');
   var es6Rules = require('./es6-rules');
   var typescriptRules = {
      '@typescript-eslint/adjacent-overload-signatures': 'error',
      '@typescript-eslint/array-type': [
         'error',
         {
            'default': 'array'
         }
      ],
      '@typescript-eslint/ban-types': [
         'error',
         {
            'types': {
               'Object': {
                  'message': 'Avoid using the `Object` type. Did you mean `object`?'
               },
               'Function': {
                  'message': 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
               },
               'Boolean': {
                  'message': 'Avoid using the `Boolean` type. Did you mean `boolean`?'
               },
               'Number': {
                  'message': 'Avoid using the `Number` type. Did you mean `number`?'
               },
               'String': {
                  'message': 'Avoid using the `String` type. Did you mean `string`?'
               },
               'Symbol': {
                  'message': 'Avoid using the `Symbol` type. Did you mean `symbol`?'
               }
            }
         }
      ],
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/dot-notation': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
         'error',
         {
            'accessibility': 'no-public'
         }
      ],
      'indent': 'off',
      '@typescript-eslint/indent': [
         'error',
         3,
         {
            'SwitchCase': 1,
            'FunctionDeclaration': {
               'parameters': 'first'
            },
            'FunctionExpression': {
               'parameters': 'first'
            }
         }
      ],
      '@typescript-eslint/member-delimiter-style': [
         'error',
         {
            'multiline': {
               'delimiter': 'semi',
               'requireLast': true
            },
            'singleline': {
               'delimiter': 'semi',
               'requireLast': false
            }
         }
      ],
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/naming-convention': 'off',
      'no-empty-function': 'off',
      '@typescript-eslint/no-empty-function': 'error',
      '@typescript-eslint/no-empty-interface': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-misused-new': 'error',
      '@typescript-eslint/no-namespace': 'error',
      '@typescript-eslint/no-parameter-properties': 'off',
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': [
         'error',
         {
            'hoist': 'all'
         }
      ],
      'no-extra-parens': 'off',
      '@typescript-eslint/no-extra-parens': [
         'error',
         'all',
         {
            'nestedBinaryExpressions': false,
            'ignoreJSX': 'all' 
         }
      ],
      '@typescript-eslint/no-unused-expressions': [
         'error',
         {
            'allowShortCircuit': true
         }
      ],
      '@typescript-eslint/no-unused-vars': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-var-requires': 'error',
      '@typescript-eslint/prefer-for-of': 'error',
      '@typescript-eslint/prefer-function-type': 'error',
      '@typescript-eslint/prefer-namespace-keyword': 'error',
      '@typescript-eslint/quotes': [
         'error',
         'single'
      ],
      'semi': 'off',
      '@typescript-eslint/semi': [
         'error',
         'always'
      ],
      '@typescript-eslint/triple-slash-reference': [
         'error',
         {
            'path': 'always',
            'types': 'prefer-import',
            'lib': 'always'
         }
      ],
      '@typescript-eslint/type-annotation-spacing': 'error',
      '@typescript-eslint/unified-signatures': 'error',
      "@typescript-eslint/explicit-function-return-type": [
         "error",
         {
            "allowExpressions": true,
            "allowTypedFunctionExpressions": true,
            "allowHigherOrderFunctions": false,
            "allowDirectConstAssertionInArrowFunctions": false,
            "allowConciseArrowFunctionExpressionsStartingWithVoid": false
         }
      ],
      '@typescript-eslint/no-inferrable-types': ['error', {'ignoreParameters': true}]
   };

   module.exports = {
      env: {
         browser: true,
         es6: true
      },
      extends: [
         'plugin:@typescript-eslint/recommended',
         'plugin:@typescript-eslint/recommended-requiring-type-checking',
         'eslint:recommended'
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
         project: 'tsconfig.json',
         sourceType: 'module'
      },
      plugins: [
         'eslint-plugin-prefer-arrow',
         '@typescript-eslint'
      ],
      rules: Object.assign({}, commonRules, es6Rules, typescriptRules)
   };
}());
