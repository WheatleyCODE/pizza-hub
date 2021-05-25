module.exports = {
  "extends": [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  "plugins": ["react", "@typescript-eslint", "jest", "prettier"],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module",
    "project": "./tsconfig.json"
  },
  "rules": {
    "import/prefer-default-export": 0,
    "react/no-array-index-key": 0,
    "react/require-default-props": 0,
    "react/jsx-one-expression-per-line": 0,
    "react/state-in-constructor": 0,
    "react-hooks/exhaustive-deps": 0,
    "react/jsx-props-no-spreading": 0,
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    // "operator-linebreak": ["error", "before", { "overrides": { "=": "ignore" } }],
    "operator-linebreak": 0,

    "max-len": ["error", {
        "code": 100,
        "tabWidth": 2,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ]
  },
  "overrides": [
    {
      "files": ["**/*.tsx"],
      "rules": {
        "react/prop-types": "off"
      }
    }
]
}