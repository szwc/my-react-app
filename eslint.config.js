import globals from 'globals'
import pluginJs from '@eslint/js'
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js'
import { fixupConfigRules } from '@eslint/compat'
import pluginPrettier from 'eslint-plugin-prettier'
export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  // pluginPrettier.configs.recommended, // 配置还有问题
  {
    files: ['**/*.jsx'],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } }
  },
  ...fixupConfigRules(pluginReactConfig, pluginPrettier),
  {
    // "extends": [
    //   "eslint:recommended",
    //   "plugin:react/recommended"
    // ],
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'warn',
      'prettier/prettier': 'error',
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'off'
    },
    ignores: ['.config/*']
  }
]
