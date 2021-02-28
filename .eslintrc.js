module.exports = {
  root: true,
  env: {
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2018
  },
  extends: ['eslint:recommended'],
  plugins: [],
  // add your custom rules here
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    semi: ['warn', 'always'],
    'no-extra-semi': 'warn',
    quotes: ['warn', 'single']
  }
};
