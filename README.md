# ESLint
ESLint rules for JavaScript and TypeScript

## Use
- Install this package, e.g. `npm install --save-dev eslint-config-techsmith eslint`
- You may also want to install `globals` - `npm install --save-dev globals`
- Create a file called `eslint.config.js` in your project root. It should have contents similar to this:

```javascript
const getTscLintingConfig = require('./index');
const globals = require('globals');

module.exports = getTscLintingConfig(['node_modules/*'], globals.browser);
```

- The first arg is what files to ignore - think carefully about this. You almost certainly want to ignore `node_modules`, but you may want to ignore others like auto-gen'd code or `dist`. You can run eslint with `--debug` to see what it thinks it needs to lint.
- The second arg is an object (`Record<string, false>`) of globals for eslint to be aware of. You may use the `globals` package (not included) to make this easier.
- This package should automatically handle JS, TS, and React with no further configuration
- While this package has sensible default rules, you may want to tweak some rules. You can do so fairly easily, e.g.:

```javascript
module.exports = [
   ...getTscLintingConfig(['node_modules/*'], globals.browser),
   {
      rules: {
         'no-console': [
            'error',
            {allow: ['debug', 'info', 'warn', 'error', 'time', 'timeEnd']}
         ]
      }
   },
   {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
         '@typescript-eslint/restrict-plus-operands': 'off',
         '@typescript-eslint/no-unsafe-member-access': 'off',
         '@typescript-eslint/no-unsafe-call': 'off',
         '@typescript-eslint/no-unsafe-assignment': 'off',
         '@typescript-eslint/no-unsafe-argument': 'off',
         '@typescript-eslint/prefer-nullish-coalescing': 'off',
         'prefer-arrow/prefer-arrow-functions': ['error', {classPropertiesAllowed: true}],
         '@typescript-eslint/consistent-type-imports': ['error', {fixStyle: 'inline-type-imports'}]
      }
   }
];
```

## Integrating into your build

- Run eslint as part of your build to ensure your JavaScript is up to snuff!
- As an example, add the following to your package.json file

```javascript
"scripts": {
    "lint": "eslint --cache --color",
}
```

- This example will lint all JS and TS files in your project.
- Run the script as a "custom script" build step: `npm run lint` or `yarn lint`

## Releasing

This is a public npm package. These are the steps for releasing

1) Merge PR / update version number in package.json
2) npm login
3) Enter credentials for npm login obtained from the usual place credentials are stored (leaving this deliberately vague since this is a public repo)
4) npm publish

## Testing

This project lints itself and also contains some files in `__tests__` and `example-files` which should currently have various linting failures. However, you will likely need to publish a pre-release package and try it in a current repo to validate any tweaks.