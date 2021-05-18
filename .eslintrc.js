const path = require("path");

module.exports = {
  extends: ['plugin:react/recommended', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  plugins: ['react','@typescript-eslint'],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': ['off']
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      },
      alias: [
        ['~src', path.join(__dirname, 'src')],
        ['~pages', path.join(__dirname, 'src/pages')],
        ['~layout', path.join(__dirname, 'src/layout')],
        ['~containers', path.join(__dirname, 'src/containers')],
        ['~components', path.join(__dirname, 'src/components')]
      ]
    }
  },
  ignorePatterns: ['.eslintrc.js']
};
