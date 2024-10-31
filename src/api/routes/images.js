import express from "express";

import * as Ctrl from "../controllers/images.js";
import auth from "../middleware/auth.js";
import multer, { savePath } from "../middleware/multer-config.js";

const router = express.Router();
console.warn(`voici le path pour récupérer les images ${savePath}`)

router.get(`${savePath}`, express.static(savePath));
router.post("/", multer, auth, Ctrl.postImage);
export default router;
