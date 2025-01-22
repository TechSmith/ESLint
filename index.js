const commonRules = require('./common-rules');
const reactRules = require('./react-rules');
const tsRules = require('./ts-rules');
const reactPlugin = require('eslint-plugin-react');
const reactHooksPlugin = require('eslint-plugin-react-hooks');
const preferArrowPlugin = require('eslint-plugin-prefer-arrow');
const tsEslint = require('typescript-eslint');
const stylisticPlugin = require('@stylistic/eslint-plugin');

module.exports = (ignores, globals) => [
   {
      name: 'global ignores',
      ignores: ignores
   }, {
      name: 'global plugins',
      plugins: {'prefer-arrow': preferArrowPlugin, '@stylistic': stylisticPlugin}
   }, {
      name: 'global options',
      linterOptions: {
         reportUnusedDisableDirectives: 'error'
      },
      languageOptions: {
         globals
      }
   }, {
      name: 'base js rules',
      files: ['**/*.?(m|c)@(j|t)s?(x)'],
      rules: commonRules
   }, {
      name: 'react rules',
      files: ['**/*.?(m|c)jsx', '**/*.?(m|c)tsx'],
      plugins: {'react-hooks': reactHooksPlugin, react: reactPlugin},
      rules: reactRules,
      languageOptions: {
         parserOptions: {
            ecmaFeatures: {
               jsx: true
            }
         }
      }
   }, {
      name: 'ts rules',
      files: ['**/*.?(m|c)ts?(x)'],
      rules: tsRules,
      plugins: {'@typescript-eslint': tsEslint.plugin},
      languageOptions: {
         parser: tsEslint.parser,
         parserOptions: {
            projectService: true,
            tsconfigRootDir: __dirname
         }
      }
   }, {
      name: 'common ts test exceptions',
      files: ['__@(test|tests)__/**/*.?(m|c)ts?(x)', '**/*.@(test|spec).?(m|c)ts?(x)'],
      rules: {
         '@typescript-eslint/no-magic-numbers': 'off',
         '@typescript-eslint/unbound-method': 'off'
      }
   }, {
      name: 'common js test exceptions',
      files: ['__@(test|tests)__/**/*.?(m|c)js?(x)', '**/*.@(test|spec).?(m|c)js?(x)'],
      rules: {
         'no-magic-numbers': 'off'
      }
   }
];
