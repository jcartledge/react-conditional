import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    coverage: {
      all: true,
      exclude: [],
      excludeNodeModules: true,
      reporter: ["text", "json", "html"],
      src: ["./src"],
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100,
    },
  },
});
