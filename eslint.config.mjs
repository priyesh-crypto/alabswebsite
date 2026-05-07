import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "src/main.tsx",
      "src/app/App.tsx",
      "src/app/pages/**",
      "src/app/components/Navigation.tsx",
      "src/app/components/figma/**",
      "src/app/routes.ts",
      "vite.config.ts",
    ],
  },
];
