import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import statusDB from "./middleware/statusDB";
import helmet from "./middleware/helmet";
import router from "./routes/index";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

export const handler = express();

handler.use(morgan("dev", { immediate: true }));
handler.use(morgan("dev", { immediate: false }));
handler.use(cors());
handler.use(helmet);
handler.use(express.json());

handler.use(statusDB);

handler.use(router);
handler.use("/images", express.static(path.join(__dirname, "images")));

handler.use("/api", (req, res, next) => {
  res.status(200).json({ url: req.url });
});
