import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import history from "vite-plugin-history";
import mix from "vite-plugin-mix";

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  plugins: [
    mix.default({
      handler: "./src/api/index.js"
    }),
    history({
      index: "./index.html",
      rewrites: [{ from: "/api", to: (ctx) => ctx.request.url }], // précise de pas toucher à l'API.
    }),
    react(),
    eslint(),
  ],
});
