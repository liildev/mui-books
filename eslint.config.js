import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import babelParser from '@babel/eslint-parser';

const config = tseslint.config({
  ignores: ['dist'],
  files: ['**/*.{ts,tsx}'],
  languageOptions: {
    ecmaVersion: 2020,
    globals: globals.browser,
    parser: babelParser,
    parserOptions: {
      requireConfigFile: true,
      ecmaVersion: 2022,
      sourceType: 'module',
    },
  },
  plugins: {
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
    import: importPlugin,
  },
  rules: {
    ...reactHooks.configs.recommended.rules,
    'react-refresh/only-export-components': [
      'off',
      { allowConstantExport: false },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['sibling', 'parent'],
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
  },
});

export default config;
