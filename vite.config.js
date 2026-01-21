import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve("./src"),
    },
  },
  server: {
    port: 3001,
    host: true,
    strictPort: true,
    proxy: {
      "/api/v1": {
        target: process.env.VITE_API_PROXY_TARGET || "https://d186ea47e3cd.ngrok-free.app",
        changeOrigin: true,
        secure: false,
        headers: {
          "ngrok-skip-browser-warning": "true",
        },
      },
    },
  },
});
