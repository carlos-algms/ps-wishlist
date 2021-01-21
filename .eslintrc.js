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
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
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
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: ['@material-ui/core', '@material-ui/lab'], // Only root imports are blocked
        patterns: ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*'],
      },
    ],
    'react/prop-types': 'off',
    'import/first': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['parent', 'internal'],
          ['index', 'sibling'],
        ],
        'newlines-between': 'always',
        alphabetize: { order: 'asc', caseInsensitive: true },
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
    {
      files: ['*.d.ts'],
      rules: {
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
  ],

  ignorePatterns: ['node_modules/', 'lib/', 'public/', 'build/', 'dist/', '.temp'],
};

module.exports = options;
