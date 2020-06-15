const path = require('path');

module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': ['error'],
    'react/jsx-filename-extension': ['off'],
    'react/jsx-props-no-spreading': ['off'],
    'no-else-return': ['off']
  },
  env: {
    browser: true,
    node: true
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
