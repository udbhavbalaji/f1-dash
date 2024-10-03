import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@data": path.resolve(__dirname, "src/data"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
      "@app-types": path.resolve(__dirname, "../types"),
    },
  },
});
