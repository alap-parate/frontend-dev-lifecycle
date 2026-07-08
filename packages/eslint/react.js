import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";

export const reactConfig = [
  // global ignore directories
  { 
    ignores: ["dist", "build", "node_modules"] 
  },
  {
    files: ["**/*.{js,jsx}"],
    ...js.configs.recommended,
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    rules: {
      // recommended rules activation
      ...reactPlugin.configs.flat.recommended.rules,
      ...reactHooksPlugin.configs.flat.recommended.rules,

      // bypass outdated react scope requirements
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",

      // project custom styling and safety preferences
      "no-unused-vars": "warn",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect", // auto-scans installed React framework version
      },
    },
  },
];