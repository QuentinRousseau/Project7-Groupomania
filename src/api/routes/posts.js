const express = await import("express");
const router = express.Router();

const auth = await import("../middleware/auth");
const multer = await import("../middleware/multer-config");

const Ctrl = await import("../controllers/posts");

router.get("/", auth, Ctrl.getAllPosts);
router.get("/:id", auth, Ctrl.getOnePost);
router.post("/", auth, multer, Ctrl.createPost);
router.put("/:id", auth, multer, Ctrl.modifyPost);
router.delete("/:id", auth, Ctrl.deletePost);
router.post("/:id/like", auth, Ctrl.likeOrDislike);

module.exports = router;
