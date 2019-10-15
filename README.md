# eslint-config-sec
Linting rules for safe and secure client code

# Rules
Extends `eslint-plugin-no-unsanitized` (see [docs](https://github.com/mozilla/eslint-plugin-no-unsanitized/tree/master/docs/rules))

* `no-eval` - eval('evil code')
* `no-implied-eval` - same as eval
* `radix` - parseInt('12345', 10) without radix
* `no-debugger` - disallow debugger; in code
* `no-new-func` - new Function('evil code')

# Usage

Add this to `.eslintrc.js` file:

```js
"extends": [
  "eslint-config-sec"
]
```
