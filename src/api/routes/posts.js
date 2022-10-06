import express from "express";
import auth from "../middleware/auth";
import * as Ctrl from "../controllers/posts";
import multer from "../middleware/multer-config";

const router = express.Router();

router.get("/", auth, Ctrl.getAllPosts);
// router.get("/:id", auth, Ctrl.getOnePost);
router.post("/", auth, Ctrl.createPost);
router.put("/:id", auth, Ctrl.modifyPost);
router.delete("/:id", auth, Ctrl.deletePost);
// router.post("/:id/like", auth, Ctrl.likeOrDislike);

export default router;
