# :umbrella: eslint-config-sec
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)
![License](https://img.shields.io/npm/l/eslint-config-sec?style=flat-square)
![Dependencies](https://img.shields.io/david/peer/rustcohlnikov/eslint-config-sec?style=flat-square)
[![Chat on Gitter](https://img.shields.io/gitter/room/fe-sec/community)](https://gitter.im/fe-sec/community)

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
