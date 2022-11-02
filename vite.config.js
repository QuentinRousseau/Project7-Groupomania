import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mix from "vite-plugin-mix";
import history from "vite-plugin-history";
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  clearScreen: false,
  plugins: [
    mix.default({
      handler: "./src/api/index.js",
      //server: "./src/api/server.js",
      buildTo: "./apidist",
    }),
    history({
      index: "./index.html",
      rewrites: [{ from: "/api", to: (ctx) => ctx.request.url }], // précise de pas toucher à l'API.
    }),
    react(),
    eslint(),
  ],
});
