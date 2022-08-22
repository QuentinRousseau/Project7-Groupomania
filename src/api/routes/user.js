const express = await import("express");
const router = express.Router();

const userCtrl = await import("../controllers/user");

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

module.exports = router;
