module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    extends: [
      'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
      'next/core-web-vitals' // Use the recommended rules from Next.js
    ],
    parserOptions: {
      ecmaVersion: 2020, // Allows modern ECMAScript features
      sourceType: 'module', // Allows using imports
    },
    rules: {
      // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
      'no-unused-vars': 'off', // Disable no-unused-vars rule
      '@typescript-eslint/no-unused-vars': 'off', // Disable TypeScript's no-unused-vars rule
    },
  };
  