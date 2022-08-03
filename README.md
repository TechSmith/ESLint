# ESLint
ESLint rules for JavaScript and TypeScript

## Use
- Install this package and eslint, e.g. `npm install --save-dev eslint-config-techsmith eslint`
- Decide which ruleset is appropriate for you. If you're using TypeScript, you should use the `techsmith/ts` ruleset. For ES6 (or modern JS in general) you should use `techsmith/es6`. For old school JS, you can use the plain `techsmith` ruleset. The examples below are for the `techsmith/es6` ruleset, so substitute as appropriate.
- Create an `eslintConfig` entry in your package.json file referencing the TechSmith ESLint rules, e.g.:

```
"eslintConfig": {
    "extends": [
      "techsmith/es6"
    ]
  }
```

- See ESLint docs for additional options for configuring ESLint
- If you're using VSCode, you should install eslint plugins to get in-IDE linting
- If you're using webstorm, this may help you integrate these rules into the IDE: https://www.jetbrains.com/help/webstorm/2016.3/eslint.html

## Integrating into your build

- Run eslint as part of your build to ensure your JavaScript is up to snuff!
- As an example, add the following to your package.json file

```javascript
"scripts": {
    "lint": "eslint --cache --color src/**/*.{js,jsx,ts,tsx}",
}
```
  - This example will lint all JS and TS files in your `src` folder. Dependending on your folder structure, you may need to tweak this. Another option is to just lint everything, e.g. `eslint . --cache --color --ext .jsx,.js,.ts,.tsx`, but in that case, you'll want to be careful to configure your ESLint to ignore `node_modules`, build output folders, and other things that shouldn't be linted

- Run the script as a "custom script" build step: `npm run lint` or `yarn lint`
- Advanced users can consider integrating ESLint into their build via other mechanics (e.g. a WebPack loader or a grunt step)
- If you have both JS and TS in your source code, you may want to configure linting for both JS and TS using separate rule sets. Here's an example config file for how one might do that:

```javascript
{
   "ignorePatterns": ["node_modules/", "dist/"],
   "extends": ["techsmith/es6"],
   "overrides": [
      {
         "files": ["**/*.ts", "**/*.tsx"],
         "extends": ["techsmith/ts"],
      }
   ],
   "parserOptions": {
      "ecmaVersion": 2020
   }
}
```

- If you're using React, you can additionally use the React rulesets `techsmith/react` or `techsmith/react-ts`. Here's an example config that runs React linting for both JS and TS:

```javascript
{
   "ignorePatterns": ["node_modules/", "dist/"],
   "extends": ["techsmith/es6", "techsmith/react"]
   "overrides": [
      {
         "files": ["**/*.ts", "**/*.tsx"],
         "extends": ["techsmith/ts", "techsmith/react-ts"]
      }
   ],
   "parserOptions": {
      "ecmaVersion": 2020
   }
}
```

## Releasing

This is a public npm package. These are the steps for releasing

1) Merge PR / update version number in package.json
2) npm login
3) Enter credentials for npm login obtained from the usual place credentials are stored (leaving this deliberately vague since this is a public repo)
4) npm publish
