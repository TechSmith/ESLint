// https://github.com/jsx-eslint/eslint-plugin-react
// dunno how many of these are still relevant to 'modern react', but oh well
const reactRecommended = {
   'react/display-name': 'error',
   'react/jsx-key': 'error',
   'react/jsx-no-comment-textnodes': 'error',
   'react/jsx-no-duplicate-props': 'error',
   'react/jsx-no-target-blank': 'error',
   'react/jsx-no-undef': 'error',
   'react/jsx-uses-react': 'error',
   'react/jsx-uses-vars': 'error',
   'react/no-children-prop': 'error',
   'react/no-danger-with-children': 'error',
   'react/no-deprecated': 'error',
   'react/no-direct-mutation-state': 'error',
   'react/no-find-dom-node': 'error',
   'react/no-multi-comp': 'error',
   'react/no-render-return-value': 'error',
   'react/no-string-refs': 'error',
   'react/no-unescaped-entities': 'error',
   'react/no-unknown-property': 'error',
   'react/no-unsafe': 'error',
   'react/prop-types': 'error',
   'react/react-in-jsx-scope': 'error',
   'react/require-render-return': 'error'
};

const customRules = {
   'react/no-unused-prop-types': 'error',
   'react/react-in-jsx-scope': 'off',
   'react/jsx-no-useless-fragment': 'error',
   'react/jsx-fragments': 'error',
   'react/prop-types': 'off' // this is fine for JS but irrelevant for TS. Let's not branch the config.
};

const styleRules = {
   '@stylistic/jsx-equals-spacing': 'error',
   '@stylistic/jsx-curly-spacing': 'error',
   '@stylistic/jsx-curly-brace-presence': 'error',
   '@stylistic/jsx-quotes': 'error',
   '@stylistic/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never'
   }],
   '@stylistic/jsx-one-expression-per-line': 'error',
   '@stylistic/jsx-first-prop-new-line': 'error',
   '@stylistic/jsx-max-props-per-line': 'error',
   '@stylistic/jsx-closing-bracket-location': 'error',
   '@stylistic/jsx-closing-tag-location': 'error',
   '@stylistic/jsx-wrap-multilines': ['error', {
      'declaration': 'parens-new-line',
      'assignment': 'parens-new-line',
      'return': 'parens-new-line',
      'arrow': 'parens-new-line',
      'condition': 'parens-new-line',
      'logical': 'parens-new-line',
      'prop': 'parens-new-line'
   }],
   '@stylistic/jsx-self-closing-comp': 'error'
};

const hookRules = {
   'react-hooks/rules-of-hooks': 'error',
   'react-hooks/exhaustive-deps': 'error'
};

module.exports = {
   ...reactRecommended,
   ...customRules,
   ...styleRules,
   ...hookRules
};