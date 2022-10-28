import express from "express";
import auth from "../middleware/auth";
import * as Ctrl from "../controllers/posts";

const router = express.Router();

router.get("/", auth, Ctrl.getAllPosts);
router.post("/", auth, Ctrl.createPost);
router.put("/:id", auth, Ctrl.modifyPost);
router.delete("/:id", auth, Ctrl.deletePost);
router.post("/:id/like", auth, Ctrl.likeOrDislike);

export default router;
