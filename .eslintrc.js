const path = require('path');

module.exports = {
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb/hooks', 'prettier'],
  plugins: ['react'],
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parserOptions: {
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
      alias: [
        ['~src', path.join(__dirname, 'src')],
        ['~pages', path.join(__dirname, 'src/pages')],
        ['~layout', path.join(__dirname, 'src/layout')],
        ['~containers', path.join(__dirname, 'src/containers')],
        ['~components', path.join(__dirname, 'src/components')]
      ]
    }
  }
};
