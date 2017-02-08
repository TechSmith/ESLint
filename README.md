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

- Create a .eslintrc.js file in the root of your app. e.g.:

```javascript

module.exports = {
   extends: ['techsmith/es6'],
};
```

or 

```javascript

module.exports = {
   extends: ['techsmith'],
};
```

- Configure WebStorm to know about your linting rules: https://www.jetbrains.com/help/webstorm/2016.3/eslint.html
- Run eslint as part of your build to ensure your JavaScript is up to snuff!
