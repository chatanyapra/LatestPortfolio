import express from "express";
import {createUser, loginUser, logoutUser} from "../controller/authController.js";
const router = express.Router();

router.post("/login", loginUser);
router.post("/signup", createUser);
router.post("/logout", logoutUser);

export default router;