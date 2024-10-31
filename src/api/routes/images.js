import express from "express";
import path from "path";

import * as Ctrl from "../controllers/images.js";
import auth from "../middleware/auth.js";
import multer from "../middleware/multer-config.js";

const router = express.Router();

router.get("/", express.static(path.resolve("./images")));
router.post("/", multer, auth, Ctrl.postImage);
export default router;
