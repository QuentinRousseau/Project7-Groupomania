import 'dotenv/config';
import express from "express";
import "express-async-errors"; // gestion d'erreurs
import morgan from "morgan"; // renvoie les données au terminal pour check les requêtes

import cors from "cors"; // gere les autorisations lors des requetes HTTP (sécurité)
import { fileURLToPath } from "url";
import helmet from "./middleware/helmet.js"; // gère les entêtes lors des requetes HTTP (sécurité)
import statusDB from "./middleware/statusDB.js";
import router from "./routes/index.js";

import { dirname } from "path";
import { savePath } from './middleware/multer-config.js';
export const __dirname = dirname(fileURLToPath(import.meta.url));

export const handler = express();
handler.use(morgan("dev", { immediate: true }));
handler.use(morgan("dev", { immediate: false }));
handler.use(cors());
handler.use(helmet);
handler.use(express.json());

handler.use(statusDB);
handler.use(router);

handler.use(express.static(savePath));
handler.use("/api", (req, res, next) => {
  res.status(200).json({ url: req.url });
});

handler.use((error, req, res, next) => {
  if (!(error instanceof Error)) return;
  console.log(error);
  res.status(400).json({ error: error.message });
});
