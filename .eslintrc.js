module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  // Save time, use a shareable config with the extends feature of .eslintrc files.
  // Configs to consider:
  // https://github.com/yannickcr/eslint-plugin-react#recommended
  // Extend with airbnb's eslint config (which uses eslint-plugin-react):
  // https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb/rules
  extends: "airbnb",
  rules: {
    "quotes": ["error", "double"],
    // overwrite https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    "react/jsx-filename-extension": ["error", { extensions: [".js", ".jsx"] }]
  }
};
