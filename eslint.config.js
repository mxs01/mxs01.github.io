import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,

  {
    rules: {
      // Example rules
      'no-console': 'warn',         // Warn on console.log statements
      'indent': ['error', 2],       // Enforce 2-space indentation
      'quotes': ['error', 'single'],// Enforce single quotes
      'no-unused-vars': 'warn',     // Warn on variables that are defined but never used
      'eqeqeq': 'error',            // Require === and !==
      'comma-dangle': ['error', 'always-multiline'], // Require trailing commas for multiline statements
    },
  },

];