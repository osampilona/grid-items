// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    include: ["**/*.test.tsx", "**/*.spec.tsx"],
    coverage: {
      exclude: [
        "postcss.config.js",
        "tailwind.config.js",
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
