module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "standard",
    "standard-react",
    "react-app"
  ],
  plugins: [
    "@typescript-eslint",
    "react",
  ],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-unused-vars': [2, { args: 'none' }]
      }
    }
  ]
}