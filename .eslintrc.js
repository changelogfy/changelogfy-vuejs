module.exports = {
  env: {
    browser: true,
    es2020: true,
    commonjs: true,
  },
  extends: ["eslint:recommended", "plugin:vue/essential"],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {},
};
