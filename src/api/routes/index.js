import express from "express";
import user from "./user.js";
import posts from "./posts.js";
import images from "./images.js";

const router = express.Router();

router.use("/api/posts", posts);
router.use("/api/auth", user);
router.use("/api/images", images);

export default router;
