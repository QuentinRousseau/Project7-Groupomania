import express from "express";
import user from "./user";
import posts from "./posts";
import images from "./images";

const router = express.Router();

router.use("/api/posts", posts);
router.use("/api/auth", user);
router.use("/api/images", images);

export default router;
