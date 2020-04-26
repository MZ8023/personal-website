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
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'nuxt/no-cjs-in-config': 'off',
    // 'space-before-function-paren': 'off',
    'curly': 0, // 允许单行if无{}
    'vue/singleline-html-element-content-newline': 0, // 允许html标签在一行
    'arrow-parens': ["error", "as-needed"] // 单个参数箭头函数省略括号
  }
}