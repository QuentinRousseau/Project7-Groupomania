import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import { handler } from "./index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function createServer() {
  const app = express();
  app.use(handler);
  app.use(express.static(path.resolve(__dirname, "../../dist")));

  app.listen(5173, () => console.log("started on 5173"));
}

createServer();
