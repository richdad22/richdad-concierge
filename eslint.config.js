// ESLint v9+ flat config
import pluginJs from "@eslint/js";
import pluginImport from "eslint-plugin-import";
import globals from "globals";

export default [
  {
    ignores: ["dist", "node_modules", ".husky"],
  },
  // Base recommended rules
  pluginJs.configs.recommended,
  // Import plugin
  {
    plugins: { import: pluginImport },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Example rules; adjust as needed
      "no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      // In vanilla Vite we resolve bare imports; disable unresolved errors
      "import/no-unresolved": "off",
    },
  },
];
