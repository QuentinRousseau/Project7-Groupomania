import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import env from "./managers/env";
import { createServer as createViteServer } from "vite";

export default helmet(
  env.NODE_ENV === "production" ? {} : { contentSecurityPolicy: false }
);

export const handler = express();
handler.use(morgan("dev", { immediate: true }));
handler.use(morgan("dev", { immediate: false }));
handler.use(cors());
handler.use(helmet()); // fais crasher ? pourquoi
handler.use(express.json());

const vite = await createViteServer({
  server: { middlewareMode: true },
  appType: "custom",
});

handler.use(await import("./middleware/statusDB"));
handler.use(vite.middlewares);

handler.use("/api/auth", await import("./routes/user"));
handler.use("/images", express.static(path.join(__dirname, "images")));
handler.use("/api/posts", await import("./routes/posts"));

handler.use("/api", (req, res, next) => {
  res.status(200).json({ url: req.url });
});
