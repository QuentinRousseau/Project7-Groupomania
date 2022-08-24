import express from "express";
import user from "./user";
import posts from "./posts";

const router = express.Router();

router.use("/api/posts", posts);
router.use("/api/auth", user);

export default router;
