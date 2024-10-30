import 'dotenv/config';
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { handler } from "./index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
async function createServer() {
  const app = express();
  app.use(handler);
  app.use(express.static(path.resolve(__dirname, "../../dist")));

  app.listen(process.env.PORT, () => console.log(`started on ${process.env.PORT}`));
}

createServer();
