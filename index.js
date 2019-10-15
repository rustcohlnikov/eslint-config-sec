module.exports = {
    env: {
      browser: true,
      node: true
    },
    extends: ["plugin:no-unsanitized/DOM"],
    plugins: ["no-unsanitized"],
    rules: {
      "no-eval": "error",
      "no-implied-eval": "error",
      "radix": "error",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-new-func": "error"
    }
  };
  