# ESLint
Linting rules for JavaScript (ESLint)

#Use
- Reference this package and eslint in your packages.json, e.g.:
```javascript

"devDependencies": {
    "eslint": "^3.14.1",
    "eslint-config-techsmith": "git+ssh://git@github.com/TechSmith/ESLint.git#<latest_version>"
  }
```

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

- Configure WebStorm to know about your linting rules: https://www.jetbrains.com/help/webstorm/2016.3/eslint.html

#Integrating into your build

- Run eslint as part of your build to ensure your JavaScript is up to snuff!
- Add the following to your package.json file

```javascript
"scripts": {
    "lint": "eslint app/**/*.{js,jsx} __tests__/**/*.{js,jsx}",
}
```

- Run the script as a "custom script" build step: `npm run lint` or `yarn lint`
- Advanced users can consider integrating ESLint into their build via other mechanics (e.g. a WebPack loader or a grunt step)
