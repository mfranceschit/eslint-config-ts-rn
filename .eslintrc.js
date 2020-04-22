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
    "no-console": 2,
    "react/display-name": 0,
    "react/prop-types": 0,
    "react/jsx-no-bind": [
      "error",
      {
        "allowArrowFunctions": true,
        "allowFunctions": true
      }
    ],
    "react-native/no-color-literals": 0,
    "react-native/no-inline-styles": 0,
    "no-var": 2,
    "arrow-parens": ["error", "as-needed"],
    "no-console": 2,
    "max-len": ["error", { "code": 140 }],
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "no-unsafe-finally": 2,
    "object-literal-sort-keys": 0,
    "no-submodule-imports": 0,
    "jsx-no-multiline-js": 0,
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "never",
        "exports": "never",
        "functions": "never"
      }
    ],
    "@typescript-eslint/interface-name-prefix": [
      "error",
      {
        "allowUnderscorePrefix": false,
        "prefixWithI": "always"
      }
    ],
    "sort-imports": [
      "error",
      {
        "ignoreCase": false,
        "ignoreDeclarationSort": true,
        "ignoreMemberSort": false,
        "memberSyntaxSortOrder": ["none", "all", "multiple", "single"]
      }
    ],
    "no-unused-expressions": ["error", { "allowShortCircuit": true, "allowTernary": true }]
  },
  "plugins": ["prettier", "react-hooks"],
  "settings": {
    "react": {
      "version": "detect"
    }
  }
}
