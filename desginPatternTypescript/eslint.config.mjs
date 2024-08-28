import globals from 'globals';
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';

export default [
  {
    files: ['**/*.{js,ts}'], // Applies these settings to all JavaScript and TypeScript files
    languageOptions: {
      parser: tsParser, // Uses the TypeScript parser to parse the files
      parserOptions: {
        project: './tsconfig.json', // Specifies the TypeScript configuration file
        sourceType: 'module', // Indicates that the code uses ES6 modules
      },
      globals: globals.browser, // Includes global variables for a browser environment
    },
    plugins: {
      '@typescript-eslint': tsPlugin, // Uses the TypeScript ESLint plugin
    },
    rules: {
      ...tsPlugin.configs.recommended.rules, // Applies the recommended rules from the TypeScript ESLint plugin
    },
  },
  {
    files: ['**/*.js'], // Applies these settings to JavaScript files only
    languageOptions: {
      sourceType: 'script', // Indicates that the code uses non-modular script files
    },
  },
  js.configs.recommended, // Applies the recommended ESLint rules for JavaScript
  prettierConfig, // Integrates Prettier with ESLint to disable conflicting rules
];
