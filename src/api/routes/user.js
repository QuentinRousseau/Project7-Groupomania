import express from "express";
import * as userCtrl from "../controllers/user";
const router = express.Router();

router.post("/signup", userCtrl.signup);
router.post("/login", userCtrl.login);

export default router;
