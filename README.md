# ESLint
ESLint rules for JavaScript and TypeScript

## Use
- Install this package and eslint, e.g. `npm install --save-dev eslint-config-techsmith eslint`
- Decide which ruleset is appropriate for you. If you're using TypeScript, you should use the `techsmith/ts` ruleset. For ES6 (or modern JS in general) you should use `techsmith/es6`. For old school JS, you can use the plain `techsmith` ruleset. The examples below are for the `techsmith/es6` ruleset, so substitute as appropriate.
- Depending on which ruleset you use, you may need to install additional plugins to your dependencies. Once you go to run the eslint command, you may get an error like `ESLint couldn't find the plugin "eslint-plugin-prefer-arrow".` - fix this by installing the plugin, e.g. `npm install --save-dev eslint-plugin-prefer-arrow`. The reason why these depedencies aren't explicit dependencies of this package is that the plugins you'll need depends on the ruleset you use.
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
    "lint": "eslint --color src/**/*.{js,jsx,ts,tsx}",
}
```

- Run the script as a "custom script" build step: `npm run lint` or `yarn lint`
- Advanced users can consider integrating ESLint into their build via other mechanics (e.g. a WebPack loader or a grunt step)

## Releasing

This is a public npm package. These are the steps for releasing

1) Merge PR / update version number in package.json
2) npm login
3) Enter credentials for npm login obtained from the usual place credentials are stored (leaving this deliberately vague since this is a public repo)
4) npm publish
