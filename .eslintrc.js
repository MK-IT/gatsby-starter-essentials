const path = require('path');

module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    settings: {
      'import/resolver': {
        "typescript": {
          "alwaysTryTypes": true,
          "project": "./tsconfig.json",
          alias: [
            ['~src', path.join(__dirname, 'src')],
            ['~pages', path.join(__dirname, 'src/pages')],
            ['~layout', path.join(__dirname, 'src/layout')],
            ['~containers', path.join(__dirname, 'src/containers')],
            ['~components', path.join(__dirname, 'src/components')]
          ]
        }
      }
    },
    "rules": {
      'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
      "import/extensions": "off",
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": ["error"]
    }
};
