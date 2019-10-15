# :umbrella: eslint-config-sec
Linting rules for safe and secure client code

# Rules included
Extends `eslint-plugin-no-unsanitized`, see [documentation](https://github.com/mozilla/eslint-plugin-no-unsanitized/tree/master/docs/rules).

Additional rules:
* `no-eval` - eval('evil code')
* `no-implied-eval` - same as eval
* `radix` - parseInt('12345', 10) without radix
* `no-debugger` - disallow debugger; in code
* `no-new-func` - new Function('evil code')

# Usage
1. Install the config:

```bash

npm i -D eslint-config-sec
```

2. Add config to the `extends` section on your `.eslintrc.js` file:

```diff
"extends": [
+  "eslint-config-sec"
]
```
