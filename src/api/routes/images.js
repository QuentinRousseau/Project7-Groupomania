import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

import auth from "../middleware/auth.js";
import * as Ctrl from "../controllers/images.js";
import multer from "../middleware/multer-config.js";

const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

router.get("/", express.static(path.join(__dirname, "images")));
router.post("/", multer, auth, Ctrl.postImage);
export default router;
