/* eslint-disable no-magic-numbers */
/* eslint-disable @stylistic/quote-props */
// just gonna hard-code these. Easier to reason about than extending the opaque ruleset
// from https://github.com/eslint/eslint/blob/17f2aaec16d5afbb0d219bce6ae01d7b15d74828/packages/js/src/configs/eslint-recommended.js
const eslintRecommendedRules = {
   'constructor-super': 'error',
   'for-direction': 'error',
   'getter-return': 'error',
   'no-async-promise-executor': 'error',
   'no-case-declarations': 'error',
   'no-class-assign': 'error',
   'no-compare-neg-zero': 'error',
   'no-cond-assign': 'error',
   'no-const-assign': 'error',
   'no-constant-binary-expression': 'error',
   'no-constant-condition': 'error',
   'no-control-regex': 'error',
   'no-debugger': 'error',
   'no-delete-var': 'error',
   'no-dupe-args': 'error',
   'no-dupe-class-members': 'error',
   'no-dupe-else-if': 'error',
   'no-dupe-keys': 'error',
   'no-duplicate-case': 'error',
   'no-empty': 'error',
   'no-empty-character-class': 'error',
   'no-empty-pattern': 'error',
   'no-empty-static-block': 'error',
   'no-ex-assign': 'error',
   'no-extra-boolean-cast': 'error',
   'no-fallthrough': 'error',
   'no-func-assign': 'error',
   'no-global-assign': 'error',
   'no-import-assign': 'error',
   'no-invalid-regexp': 'error',
   'no-irregular-whitespace': 'error',
   'no-loss-of-precision': 'error',
   'no-misleading-character-class': 'error',
   'no-new-native-nonconstructor': 'error',
   'no-nonoctal-decimal-escape': 'error',
   'no-obj-calls': 'error',
   'no-octal': 'error',
   'no-prototype-builtins': 'error',
   'no-redeclare': 'error',
   'no-regex-spaces': 'error',
   'no-self-assign': 'error',
   'no-setter-return': 'error',
   'no-shadow-restricted-names': 'error',
   'no-sparse-arrays': 'error',
   'no-this-before-super': 'error',
   'no-undef': 'error',
   'no-unexpected-multiline': 'error',
   'no-unreachable': 'error',
   'no-unsafe-finally': 'error',
   'no-unsafe-negation': 'error',
   'no-unsafe-optional-chaining': 'error',
   'no-unused-labels': 'error',
   'no-unused-private-class-members': 'error',
   'no-unused-vars': ['error', {caughtErrors: 'none'}],
   'no-useless-backreference': 'error',
   'no-useless-catch': 'error',
   'no-useless-escape': 'error',
   'no-with': 'error',
   'require-yield': 'error',
   'use-isnan': 'error',
   'valid-typeof': 'error'
};

const baseJsRules = {
   'no-console': 'error',
   'curly': ['error', 'all'],
   'dot-notation': 'error',
   'eqeqeq': ['error', 'always'],
   'strict': ['error', 'function'],
   'array-callback-return': 'error',
   'block-scoped-var': 'error',
   'consistent-return': 'error',
   'no-alert': 'error',
   'no-else-return': 'error',
   'no-empty-function': 'error',
   'no-eval': 'error',
   'no-extend-native': 'error',
   'no-implicit-globals': 'error',
   'no-implied-eval': 'error',
   'no-iterator': 'error',
   'no-labels': 'error',
   'no-lone-blocks': 'error',
   'no-loop-func': 'error',
   'no-magic-numbers': ['error', {
      ignoreArrayIndexes: true,
      ignore: [-1, 0, 1, 2, 10, 60, 100, 1000]
   }],
   'no-multi-str': 'error',
   'no-new-func': 'error',
   'no-new-wrappers': 'error',
   'no-new': 'error',
   'no-octal-escape': 'error',
   'no-proto': 'error',
   'no-return-assign': 'error',
   'no-sequences': 'error',
   'no-throw-literal': 'error',
   'no-unmodified-loop-condition': 'error',
   'no-unused-expressions': ['error', {
      allowShortCircuit: true,
      allowTernary: true
   }],
   'no-useless-call': 'error',
   'no-useless-concat': 'error',
   'no-useless-return': 'error',
   'no-void': ['error', {allowAsStatement: true}],
   'radix': 'error',
   'vars-on-top': 'error',
   'no-shadow': 'error',
   'no-undef-init': 'error',
   'no-undefined': 'error',
   'no-use-before-define': 'error',
   'camelcase': 'error',
   'func-names': ['error', 'never'],
   'func-style': 'error',
   'new-cap': 'error',
   'no-array-constructor': 'error',
   'no-bitwise': 'error',
   'no-lonely-if': 'error',
   'no-multi-assign': 'error',
   'no-nested-ternary': 'error',
   'no-new-object': 'error',
   'no-unneeded-ternary': 'error',
   'one-var': ['error', 'never'],
   'unicode-bom': 'error',
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
   'guard-for-in': 'error'
};

// probably no good reason to keep these separate anymore, but for historical reasons I guess I will.
const es6Rules = {
   'no-duplicate-imports': 'error',
   'no-useless-computed-key': 'error',
   'no-useless-constructor': 'error',
   'no-useless-rename': 'error',
   'no-var': 'error',
   'object-shorthand': ['error', 'consistent-as-needed'],
   'prefer-arrow-callback': 'error',
   'prefer-const': 'error',
   'prefer-rest-params': 'error',
   'prefer-spread': 'error',
   'prefer-template': 'error',
   'prefer-arrow/prefer-arrow-functions': 'error',
   'max-classes-per-file': [
      'error',
      1
   ],
   'arrow-body-style': [
      'error',
      'as-needed'
   ]
};

// Eslint deprecated styling rules, these are now maintained in a plugin
// https://github.com/eslint-stylistic/eslint-stylistic/blob/dd40b057bcec2309c8c0697429990dee838915c2/packages/eslint-plugin/configs/customize.ts
// https://eslint.org/blog/2023/10/deprecating-formatting-rules/
const styleRules = {
   '@stylistic/array-bracket-newline': ['error', 'consistent'], // MJB arbitrarily added this
   '@stylistic/array-bracket-spacing': ['error', 'never'],
   '@stylistic/arrow-parens': ['error', 'as-needed'],
   '@stylistic/arrow-spacing': 'error',
   '@stylistic/brace-style': 'error',
   '@stylistic/comma-dangle': 'error',
   '@stylistic/comma-spacing': 'error',
   '@stylistic/comma-style': 'error',
   '@stylistic/computed-property-spacing': 'error',
   '@stylistic/dot-location': ['error', 'property'],
   '@stylistic/func-call-spacing': 'error',
   '@stylistic/function-call-argument-newline': ['error', 'consistent'],
   '@stylistic/generator-star-spacing': 'error',
   '@stylistic/indent': [
      'error',
      3,
      {
         SwitchCase: 1,
         FunctionDeclaration: {
            parameters: 'first'
         },
         FunctionExpression: {
            parameters: 'first'
         }
      }
   ],
   '@stylistic/key-spacing': 'error',
   '@stylistic/keyword-spacing': 'error',
   '@stylistic/max-statements-per-line': 'error',
   '@stylistic/new-parens': 'error',
   '@stylistic/no-extra-semi': 'error',
   '@stylistic/no-floating-decimal': 'error', // MJB arbitrarily added this
   '@stylistic/no-mixed-operators': [
      'error',
      {
         groups: [
            ['&', '|', '^', '~', '<<', '>>', '>>>'],
            ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
            ['&&', '||'],
            ['in', 'instanceof']
         ],
         allowSamePrecedence: true
      }
   ],
   '@stylistic/no-mixed-spaces-and-tabs': 'error',
   '@stylistic/no-multi-spaces': 'error',
   '@stylistic/no-multiple-empty-lines': ['error', {max: 1, maxEOF: 0, maxBOF: 0}],
   '@stylistic/no-tabs': 'error',
   '@stylistic/no-trailing-spaces': ['error', {skipBlankLines: false}],
   '@stylistic/no-whitespace-before-property': 'error',
   '@stylistic/object-curly-newline': 'error',
   '@stylistic/object-curly-spacing': 'error',
   '@stylistic/object-property-newline': ['error', {allowAllPropertiesOnSameLine: true}],
   '@stylistic/operator-linebreak': ['error', 'before', {overrides: {'=': 'after'}}], // MJB arbitrarily added this
   '@stylistic/padded-blocks': ['error', {
      blocks: 'never',
      classes: 'never',
      switches: 'never'
   }],
   '@stylistic/quote-props': ['error', 'as-needed'],
   '@stylistic/quotes': ['error', 'single', {
      avoidEscape: true
   }],
   '@stylistic/rest-spread-spacing': 'error',
   '@stylistic/semi': ['error', 'always'],
   '@stylistic/semi-spacing': 'error',
   '@stylistic/semi-style': 'error', // MJB arbitrarily added this
   '@stylistic/space-before-blocks': 'error',
   '@stylistic/space-before-function-paren': ['error', {
      anonymous: 'never',
      asyncArrow: 'always',
      named: 'never'
   }],
   '@stylistic/space-in-parens': 'error',
   '@stylistic/space-infix-ops': 'error',
   '@stylistic/space-unary-ops': 'error',
   '@stylistic/spaced-comment': [
      'error',
      'always',
      {
         markers: [
            '/'
         ]
      }
   ],
   '@stylistic/switch-colon-spacing': 'error', // MJB arbitrarily added this
   '@stylistic/template-curly-spacing': 'error',
   '@stylistic/template-tag-spacing': 'error', // MJB arbitrarily added this
   '@stylistic/wrap-iife': ['error', 'any'],
   '@stylistic/yield-star-spacing': 'error'
};

module.exports = {
   ...eslintRecommendedRules,
   ...baseJsRules,
   ...es6Rules,
   ...styleRules
};