import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@layouts",
        replacement: path.resolve(__dirname, "src/layouts"),
      },
      {
        find: "@screens",
        replacement: path.resolve(__dirname, "src/screens"),
      },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@globals",
        replacement: path.resolve(__dirname, "src/globals"),
      },
      {
        find: "@services",
        replacement: path.resolve(__dirname, "src/services"),
      },
    ],
  },
});
