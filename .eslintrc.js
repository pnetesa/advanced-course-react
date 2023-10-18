module.exports = {
  env: {
    'browser': true,
    'es2021': true
  },
  extends: [
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
    {
      env: {
        'node': true
      },
      files: [
        '.eslintrc.{js,cjs}'
      ],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    // 'react/jsx-indent': ['error', 4],
    '@typescript-eslint/semi': 'off',
    'semi': ['error', 'always'],
    '@typescript-eslint/member-delimiter-style': ['error', {
      'singleline': {
        'delimiter': 'semi',
        'requireLast': true
      }
    }],
    '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
    '@typescript-eslint/space-before-function-paren': 'off',
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
  },
  settings: {
    react: {
      version: "detect",
    }
  }
};
