const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config");

const Ctrl = require("../controllers/posts");

router.get("/", auth, Ctrl.getAllPosts);
router.get("/:id", auth, Ctrl.getOnePost);
router.post("/", auth, multer, Ctrl.createPost);
router.put("/:id", auth, multer, Ctrl.modifyPost);
router.delete("/:id", auth, Ctrl.deletePost);
router.post("/:id/like", auth, Ctrl.likeOrDislike);

module.exports = router;
