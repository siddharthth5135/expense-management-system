// routes/userRoutes.js
import express from "express";
const router = express.Router();

import { checkUserExist, createAdmin, createUser, getAllUser, loginUser, resetPassword } from "../controller/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

router.post("/createAdmin", createAdmin);
router.post("/createUser", authMiddleware, createUser);
router.post("/loginUser", loginUser)
router.get("/checkUser", authMiddleware, checkUserExist)
router.post("/resetPassword", authMiddleware, resetPassword)
router.get("/getAllUser", authMiddleware, getAllUser);

export default router;
