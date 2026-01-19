import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import * as parserVue from 'vue-eslint-parser'
import globals from 'globals'

export default [
  {
    name: 'app/files-to-lint',
    files: ['resources/js/**/*.{js,mjs,jsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: [
      'public/build/**',
      'public/hot',
      'vendor/**',
      'node_modules/**',
      'bootstrap/cache/**',
      'storage/**',
    ],
  },

  js.configs.recommended,

  ...pluginVue.configs['flat/recommended'],

  {
    name: 'app/global-rules',
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.amd,
        route: 'readonly',
        axios: 'readonly',
        Ziggy: 'readonly',
      },
    },
    rules: {
      'indent': ['error', 2],
      'quotes': ['warn', 'single'],
      'semi': ['warn', 'never'],
      'no-unused-vars': ['error', {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true
      }],
      'comma-dangle': ['warn', 'always-multiline'],
    },
  },

  {
    name: 'app/vue-rules',
    files: ['resources/js/**/*.vue'],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/max-attributes-per-line': 'off',
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/html-self-closing': ['warn', {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
      }],
      'vue/no-v-text-v-html-on-component': 'off',
    },
  },
]
