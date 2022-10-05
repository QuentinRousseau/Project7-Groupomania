import express from "express";
import auth from "../middleware/auth";
import * as Ctrl from "../controllers/images";
import multer from "../middleware/multer-config";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const router = express.Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

router.get("/", express.static(path.join(__dirname, "images")));
router.post("/", multer, auth, Ctrl.postImage); //voir pour enlever auth (pour les avatars ??)
//
export default router;
