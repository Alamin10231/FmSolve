    import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // import alias support
    },
  },
  server: {
    port: 3001, // চাইলে পরিবর্তন করতে পারো
    host: true,
  },
});
