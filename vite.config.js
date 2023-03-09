import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import data from "./src/content/data.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/login": {
        target: data.baseURL,
        changeOrigin: true,
      },
      "/logout": {
        target: data.baseURL,
        changeOrigin: true,
      },
      "/profile": {
        target: data.baseURL,
        changeOrigin: true,
      },
      "/api": {
        target: data.baseURL,
        changeOrigin: true,
      },
    },
  },
});
