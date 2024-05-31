import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: {
        ...globals.browser, // Adiciona as variáveis globais do navegador
        ...globals.node, // Adiciona as variáveis globais do Node.js
      },
    },
  },
  pluginJs.configs.recommended,
];
