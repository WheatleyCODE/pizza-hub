module.exports =  {
  parser:  '@typescript-eslint/parser', 
  extends:  [
    'airbnb-typescript',
  ],
  
 parserOptions:  {
    project: './tsconfig.json',
  },
  rules: {
    "react/require-default-props": [0],
    "react/no-array-index-key": [0],
    "react/jsx-props-no-spreading": [0],
  }
}