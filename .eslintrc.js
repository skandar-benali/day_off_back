module.exports = {
  env: {
    browser: false,
    node: true,
    es6: true
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    legacyDecorators: true,
  },
  extends: ["eslint:recommended", "prettier"],
  plugins: ["prettier"],
  rules: {
    "no-console": "off",
    "prettier/prettier": "error",
    "linebreak-style": "off",
    "no-empty": ["error", { allowEmptyCatch: true }]
  }
};
