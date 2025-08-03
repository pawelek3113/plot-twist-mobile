import baseConfig, { restrictEnvAccess } from "@plot-twist/eslint-config/base";
import nextjsConfig from "@plot-twist/eslint-config/nextjs";
import reactConfig from "@plot-twist/eslint-config/react";

/** @type {import('typescript-eslint').Config} */
export default [
  {
    ignores: [".next/**"],
  },
  ...baseConfig,
  ...reactConfig,
  ...nextjsConfig,
  ...restrictEnvAccess,
];
