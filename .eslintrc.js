module.exports = {
  "parser": "@typescript-eslint/parser",
  "extends": [
    "plugin:react/recommended",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/react"
  ],
  "ignorePatterns": ["node_modules/"],
  "parserOptions": {
    "ecmaVersion": 2020,
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "rules": {
    "no-console": 0
  },
  "plugins": ["prettier", "react-hooks"],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
