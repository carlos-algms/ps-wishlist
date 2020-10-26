// @ts-check

/**
 * @type {import('eslint').Linter.Config}
 */
const options = {
  env: {
    browser: true,
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: ['./tsconfig.eslint.json'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['class'] }],
    'no-restricted-imports': [
      'error',
      {
        paths: ['@material-ui/core'], // Only root imports are blocked
        patterns: ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.js'],
      env: {
        browser: true,
        node: true,
      },
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],

  ignorePatterns: ['node_modules/', 'lib/', 'public/', 'build/', 'dist/'],
};

module.exports = options;
