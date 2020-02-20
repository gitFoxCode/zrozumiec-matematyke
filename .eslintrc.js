module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-tabs': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'eol-last': 'off',
    'indent': 'off',
    'camelcase': 'off',
    'semi': 'off',
    'quote-props': 'off',
    'comma-spacing': 'off',
    'quotes': 'off',
    'arrow-spacing': 'off'
  }
}
