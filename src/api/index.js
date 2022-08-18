import express from "express";
import morgan from "morgan";
import path from "path";
import cors from "cors";
import helmet from "helmet";
import require from "vite-plugin-require";

export const handler = express();
handler.use(morgan("dev", { immediate: true }));
handler.use(morgan("dev", { immediate: false }));
//handler.use(cors());
//handler.use(helmet());    // fais crasher ? pourquoi
/*handler.use(express.json());

/*handler.use(require("./middleware/statusDB"));
/*
handler.use("/api/auth", require("./routes/user"));
handler.use("/images", express.static(path.join(__dirname, "images")));
handler.use("/api/sauces", require("./routes/sauces"));

handler.use((req, res, next) => {
  res.status(404).json({ message: "NOT_FOUND" });
});

handler.use((err, req, res, next) => {
  //gestion d'erreur par le throw
  if (!(err instanceof Error)) return;
  console.log(err);
  res.status(500).json({ message: "INTERNAL_SERVER_ERROR" });
});
*/
handler.use("/api", (req, res, next) => {
  res.status(200).json({ url: req.url });
});
