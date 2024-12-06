import { Router } from "express";
import { login, register, updateProfile } from "../controllers/auth.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.put("/", authMiddleware, updateProfile);

export default router;
