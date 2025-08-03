import baseConfig from "@plot-twist/eslint-config/base";
import reactConfig from "@plot-twist/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: ["dist/**"],
  },
  ...baseConfig,
  ...reactConfig,
];
