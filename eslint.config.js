import antfu from '@antfu/eslint-config'

export default antfu({
  // Enable stylistic formatting rules
  stylistic: true,

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: 'single', // or 'double'
  },
  rules: {
    'eslint-comments/no-unlimited-disable': 'off',
    'no-console': 'off',
  },
  jsonc: false,
  yaml: true,
  vue: false,
  typescript: true,
  markdown: false,
})
