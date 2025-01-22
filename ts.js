var commonRules = require('./common-rules');
var typescriptRules = {
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
   '@typescript-eslint/no-explicit-any': 'error',
   '@typescript-eslint/no-parameter-properties': 'off',
   'no-shadow': 'off',
   '@typescript-eslint/no-shadow': [
      'error',
      {
         'hoist': 'all'
      }
   ],
   '@typescript-eslint/no-unused-expressions': [
      'error',
      {
         'allowShortCircuit': true
      }
   ],
   'no-empty-function': 'off',
   'no-unused-vars': 'off',
   '@typescript-eslint/no-unused-vars': 'error',
   'no-use-before-define': 'off',
   '@typescript-eslint/no-use-before-define': 'error',
   '@typescript-eslint/no-var-requires': 'error',
   '@typescript-eslint/prefer-for-of': 'error',
   '@typescript-eslint/prefer-function-type': 'error',
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
   'consistent-return': 'off',
   '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
         'allowExpressions': true,
         'allowTypedFunctionExpressions': true,
         'allowHigherOrderFunctions': false,
         'allowDirectConstAssertionInArrowFunctions': false,
         'allowConciseArrowFunctionExpressionsStartingWithVoid': false
      }
   ],
   '@typescript-eslint/no-inferrable-types': ['error', {'ignoreParameters': true}],
   '@typescript-eslint/no-misused-promises': ['error', {'checksConditionals': true, 'checksVoidReturn': false}],
   '@typescript-eslint/class-literal-property-style': 'error',
   '@typescript-eslint/no-confusing-non-null-assertion': 'error',
   '@typescript-eslint/no-extraneous-class': 'error',
   '@typescript-eslint/no-meaningless-void-operator': 'error',
   '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
   'no-throw-literal': 'off',
   '@typescript-eslint/no-throw-literal': 'error',
   '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
   'no-constant-condition': 'off',
   '@typescript-eslint/no-unnecessary-condition': 'error',
   'no-useless-constructor': 'off',
   'no-magic-numbers': 'off',
   '@typescript-eslint/no-magic-numbers': ['error', {
      ignoreArrayIndexes: true,
      ignore: [-1, 0, 1, 2, 10, 60, 100, 1000],
      ignoreEnums: true,
      ignoreNumericLiteralTypes: true,
      ignoreReadonlyClassProperties: true,
      ignoreTypeIndexes: true
   }],
   '@typescript-eslint/no-useless-constructor': 'error',
   '@typescript-eslint/non-nullable-type-assertion-style': 'error',
   '@typescript-eslint/prefer-for-of': 'error',
   '@typescript-eslint/prefer-function-type': 'error',
   '@typescript-eslint/prefer-includes': 'error',
   '@typescript-eslint/prefer-nullish-coalescing': 'error',
   '@typescript-eslint/prefer-optional-chain': 'error',
   '@typescript-eslint/prefer-reduce-type-parameter': 'error',
   '@typescript-eslint/prefer-string-starts-ends-with': 'error',
   '@typescript-eslint/prefer-ts-expect-error': 'error',
   '@typescript-eslint/no-non-null-assertion': 'off',
   'no-undef': 'off'
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
   rules: {...commonRules, ...typescriptRules}
};