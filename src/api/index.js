import express from "express";
import morgan from "morgan";
import "express-async-errors";

import cors from "cors";
import statusDB from "./middleware/statusDB.js";
import helmet from "./middleware/helmet.js";
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
