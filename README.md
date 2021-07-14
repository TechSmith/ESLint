# ESLint
Linting rules for JavaScript and TypeScript (ESLint)

## Use
- Reference this package and eslint in your packages.json, e.g.:
```javascript

"devDependencies": {
    "eslint": "^6.30.0",
    "eslint-config-techsmith": "^2.1.0"
  }
```

- Depending on which rule set you use, you may need to install additional plugins to your dependencies. You should get helpful error messages pointing out the needed dependencies when you go to run the linting. 
- Create an `eslintConfig` entry in your package.json file referencing the TechSmith ESLint rules, e.g.:

```
"eslintConfig": {
    "extends": [
      "techsmith/es6"
    ]
  }
```

or 

```
"eslintConfig": {
    "extends": [
      "techsmith"
    ]
  }
```

- alternatively, you can create a .eslintrc.js file in the root of your app. e.g.:

```javascript

module.exports = {
   extends: ['techsmith/es6'],
};
```

- If you're using VSCode, you should install eslint plugins to get in-IDE linting
- If you're using webstorm, this may help you integrate these rules into the IDE: https://www.jetbrains.com/help/webstorm/2016.3/eslint.html

## Integrating into your build

- Run eslint as part of your build to ensure your JavaScript is up to snuff!
- As an example, add the following to your package.json file

```javascript
"scripts": {
    "lint": "eslint app/**/*.{js,jsx} __tests__/**/*.{js,jsx}",
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