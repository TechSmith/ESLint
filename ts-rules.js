/* eslint-disable @stylistic/quote-props */
// https://github.com/typescript-eslint/typescript-eslint/blob/e4f5a52212738996b3cf3dedb66510b9b75b07b6/packages/typescript-eslint/src/configs/recommended.ts
const tsRecommended = {
   '@typescript-eslint/ban-ts-comment': 'error',
   'no-array-constructor': 'off',
   '@typescript-eslint/no-array-constructor': 'error',
   '@typescript-eslint/no-duplicate-enum-values': 'error',
   '@typescript-eslint/no-empty-object-type': 'error',
   '@typescript-eslint/no-explicit-any': 'error',
   '@typescript-eslint/no-extra-non-null-assertion': 'error',
   '@typescript-eslint/no-misused-new': 'error',
   '@typescript-eslint/no-namespace': 'error',
   '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
   '@typescript-eslint/no-require-imports': 'error',
   '@typescript-eslint/no-this-alias': 'error',
   '@typescript-eslint/no-unnecessary-type-constraint': 'error',
   '@typescript-eslint/no-unsafe-declaration-merging': 'error',
   '@typescript-eslint/no-unsafe-function-type': 'error',
   'no-unused-expressions': 'off',
   '@typescript-eslint/no-unused-expressions': 'error',
   'no-unused-vars': 'off',
   '@typescript-eslint/no-unused-vars': ['error', {caughtErrors: 'none'}],
   '@typescript-eslint/no-wrapper-object-types': 'error',
   '@typescript-eslint/prefer-as-const': 'error',
   '@typescript-eslint/prefer-namespace-keyword': 'error',
   '@typescript-eslint/triple-slash-reference': 'error'
};

// https://github.com/typescript-eslint/typescript-eslint/blob/e4f5a52212738996b3cf3dedb66510b9b75b07b6/packages/eslint-plugin/src/configs/recommended-type-checked-only.ts
const tsRulesWithTypeChecking = {
   '@typescript-eslint/await-thenable': 'error',
   '@typescript-eslint/no-array-delete': 'error',
   '@typescript-eslint/no-base-to-string': 'error',
   '@typescript-eslint/no-duplicate-type-constituents': 'error',
   '@typescript-eslint/no-floating-promises': 'error',
   '@typescript-eslint/no-for-in-array': 'error',
   'no-implied-eval': 'off',
   '@typescript-eslint/no-implied-eval': 'error',
   '@typescript-eslint/no-misused-promises': 'error',
   '@typescript-eslint/no-redundant-type-constituents': 'error',
   '@typescript-eslint/no-unnecessary-type-assertion': 'error',
   '@typescript-eslint/no-unsafe-argument': 'error',
   '@typescript-eslint/no-unsafe-assignment': 'error',
   '@typescript-eslint/no-unsafe-call': 'error',
   '@typescript-eslint/no-unsafe-enum-comparison': 'error',
   '@typescript-eslint/no-unsafe-member-access': 'error',
   '@typescript-eslint/no-unsafe-return': 'error',
   '@typescript-eslint/no-unsafe-unary-minus': 'error',
   'no-throw-literal': 'off',
   '@typescript-eslint/only-throw-error': 'error',
   'prefer-promise-reject-errors': 'off',
   '@typescript-eslint/prefer-promise-reject-errors': 'error',
   'require-await': 'off',
   '@typescript-eslint/require-await': 'error',
   '@typescript-eslint/restrict-plus-operands': 'error',
   '@typescript-eslint/restrict-template-expressions': 'error',
   '@typescript-eslint/unbound-method': 'error'
};

const typescriptRules = {
   '@typescript-eslint/array-type': [
      'error',
      {
         default: 'array'
      }
   ],
   '@typescript-eslint/no-restricted-types': [
      'error',
      {
         types: {
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
   '@typescript-eslint/member-ordering': 'error',
   'no-shadow': 'off',
   '@typescript-eslint/no-shadow': [
      'error',
      {
         hoist: 'all'
      }
   ],
   '@typescript-eslint/no-unused-expressions': [
      'error',
      {
         allowShortCircuit: true
      }
   ],
   'no-empty-function': 'off',
   'no-use-before-define': 'off',
   '@typescript-eslint/no-empty-object-type': ['error', {allowInterfaces: 'always'}],
   '@typescript-eslint/no-use-before-define': 'error',
   '@typescript-eslint/no-var-requires': 'error',
   '@typescript-eslint/prefer-for-of': 'error',
   '@typescript-eslint/prefer-function-type': 'error',
   '@typescript-eslint/triple-slash-reference': [
      'error',
      {
         path: 'always',
         types: 'prefer-import',
         lib: 'always'
      }
   ],
   '@typescript-eslint/unified-signatures': 'error',
   'consistent-return': 'off',
   '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
         allowExpressions: true,
         allowTypedFunctionExpressions: true,
         allowHigherOrderFunctions: false,
         allowDirectConstAssertionInArrowFunctions: false,
         allowConciseArrowFunctionExpressionsStartingWithVoid: false
      }
   ],
   '@typescript-eslint/no-inferrable-types': ['error', {ignoreParameters: true}],
   '@typescript-eslint/no-misused-promises': ['error', {checksConditionals: true, checksVoidReturn: false}],
   '@typescript-eslint/class-literal-property-style': 'error',
   '@typescript-eslint/no-confusing-non-null-assertion': 'error',
   '@typescript-eslint/no-extraneous-class': 'error',
   '@typescript-eslint/no-meaningless-void-operator': 'error',
   '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
   '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
   'no-constant-condition': 'off',
   '@typescript-eslint/no-unnecessary-condition': 'error',
   'no-magic-numbers': 'off',
   '@typescript-eslint/no-magic-numbers': ['error', {
      ignoreArrayIndexes: true,
      ignore: [-1, 0, 1, 2, 10, 60, 100, 1000],
      ignoreEnums: true,
      ignoreNumericLiteralTypes: true,
      ignoreReadonlyClassProperties: true,
      ignoreTypeIndexes: true
   }],
   'no-useless-constructor': 'off',
   '@typescript-eslint/no-useless-constructor': 'error',
   '@typescript-eslint/non-nullable-type-assertion-style': 'error',
   '@typescript-eslint/prefer-includes': 'error',
   '@typescript-eslint/prefer-nullish-coalescing': 'error',
   '@typescript-eslint/prefer-optional-chain': 'error',
   '@typescript-eslint/prefer-reduce-type-parameter': 'error',
   '@typescript-eslint/prefer-string-starts-ends-with': 'error',
   '@typescript-eslint/prefer-ts-expect-error': 'error',
   'no-undef': 'off',
   '@typescript-eslint/prefer-promise-reject-errors': 'off',
   '@typescript-eslint/no-require-imports': 'off'
};

const tsStyleRules = {
   '@stylistic/member-delimiter-style': [
      'error',
      {
         multiline: {
            delimiter: 'semi',
            requireLast: true
         },
         singleline: {
            delimiter: 'semi',
            requireLast: false
         }
      }
   ],
   '@stylistic/type-annotation-spacing': 'error'
};

module.exports = {
   ...tsRecommended,
   ...tsRulesWithTypeChecking,
   ...typescriptRules,
   ...tsStyleRules
};