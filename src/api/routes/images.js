import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import * as Ctrl from "../controllers/images.js";
import auth from "../middleware/auth.js";
import multer from "../middleware/multer-config.js";

const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));
console.warn(`voici la valeur de dirname ${__dirname}`)
console.warn(`voici la valeur de express static ${path.join(__dirname, "images")}`)

router.get("/", express.static(path.resolve("./images")));
router.post("/", multer, auth, Ctrl.postImage);
export default router;
