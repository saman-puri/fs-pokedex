const js = require('@eslint/js')
const reactPlugin = require('eslint-plugin-react')
const jestPlugin = require('eslint-plugin-jest')

module.exports = [
  {
    ignores: ['node_modules/**', 'dist/**', 'eslint.config.js']
  },

  js.configs.recommended,

  {
    files: ['src/**/*.{js,jsx}'],
    plugins: {
      react: reactPlugin
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        window: 'readonly',
        document: 'readonly',
        fetch: 'readonly',
        console: 'readonly'
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'linebreak-style': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: '^React$' }],
      'react/jsx-uses-vars': 'error'
    }
  },

  {
    files: ['test/**/*.{js,jsx}'],
    plugins: {
      react: reactPlugin,
      jest: jestPlugin
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        console: 'readonly',
        jest: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        expect: 'readonly',
        beforeEach: 'readonly',
        afterEach: 'readonly'
      }
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    rules: {
      'linebreak-style': 'off',
      'no-unused-vars': ['error', { varsIgnorePattern: '^React$' }],
      'react/jsx-uses-vars': 'error'
    }
  },

  {
    files: ['server.js', 'jest.setup.js', 'playwright.config.js', 'webpack.config.js', 'e2e-tests/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        require: 'readonly',
        module: 'readonly',
        process: 'readonly',
        global: 'readonly',
        __dirname: 'readonly',
        console: 'readonly'
      }
    },
    rules: {
      'linebreak-style': 'off'
    }
  }
]