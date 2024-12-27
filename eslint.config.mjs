import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import reactRefresh from "eslint-plugin-react-refresh";

import globals from 'globals';

const __dirname = import.meta.dirname;

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.recommendedTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  reactRefresh.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    }
  },

  {
    files: ['**/*.{js,jsx,mjs}'],
    extends: [tseslint.configs.disableTypeChecked],
  },

  {
    ignores: ['**/node_modules/**', '**/.next/**', '**/out/**', '**/build/**', '**/.storybook/**'],
  },

  eslintConfigPrettier,
);