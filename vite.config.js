import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mix from "vite-plugin-mix";
import history from "vite-plugin-history";
import eslint from "vite-plugin-eslint";

console.log(mix);
// https://vitejs.dev/config/
export default defineConfig({
  
  clearScreen: false,
  plugins: [
    mix.default({
      handler: "./src/api/index.js",
      //server: "./src/api/server.js",
      /*buildTo chemin ou sera construit le serveur*/
    }),
    history({
      index: "./index.html",
      rewrites: [{ from: "/api", to: (ctx) => ctx.request.url }], // précise de pas toucher à l'API.
    }),
    react(),
    eslint(),
  ],
});
