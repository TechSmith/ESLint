(function () {
  module.exports = {
    "extends": [
      "tslint:recommended",
      "tslint-eslint-rules"
    ],
    "rules": {
      "quotemark": [true, "single", "jsx-double"],
      "ordered-imports": false,
      "eofline": false,
      "interface-name": false,
      "member-access": [true, "no-public"],
      "object-literal-sort-keys": false,
      "trailing-comma": [true, { "multiline": "never", "singleline": "never" }],
      "arrow-parens": [true, "ban-single-arg-parens"],
      "max-line-length": false,
      "object-literal-shorthand": false,
      "no-unused-expression": [true, "allow-fast-null-checks"],
      "no-magic-numbers": false,
      "no-unused-variable": true,
      "ban": [true, ["alert", "prompt", "confirm"]],
      "array-bracket-spacing": [true, "never"],
      "brace-style": [true, "1tbs"],
      "space-in-parens": [true, "never"],
      "object-curly-spacing": [true, "never"],
      "ter-indent": [true, 3, { "SwitchCase": 1 }],
      "linebreak-style": false,
      "no-multi-spaces": true,
      "variable-name": [true, "ban-keywords", "check-format"],
      "ter-func-call-spacing": true,
      "object-literal-key-quotes": [true, "as-needed"],
      "ter-arrow-parens": [true, "as-needed"],
      "ter-arrow-spacing": true,
      "ter-prefer-arrow-callback": true
    }
  };
}());