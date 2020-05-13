module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  "plugins": ['@typescript-eslint'],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
      // 支持最新 JavaScript
      ecmaVersion: 2018,
      sourceType: 'module',
  },
}
