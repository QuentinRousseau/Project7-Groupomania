import express from "express";
import morgan from "morgan"; // renvoie les données au terminal pour check les requêtes
import "express-async-errors"; // gestion d'erreurs

import cors from "cors"; // gere les autorisations lors des requetes HTTP (sécurité)
import statusDB from "./middleware/statusDB.js";
import helmet from "./middleware/helmet.js"; // gère les entêtes lors des requetes HTTP (sécurité)
import router from "./routes/index.js";

export const handler = express();

handler.use(morgan("dev", { immediate: true }));
handler.use(morgan("dev", { immediate: false }));
handler.use(cors());
handler.use(helmet);
handler.use(express.json());

handler.use(statusDB);
handler.use(router);

handler.use("/api", (req, res, next) => {
  res.status(200).json({ url: req.url });
});

handler.use((error, req, res, next) => {
  console.log(error);
  res.status(400).json(error);
});
