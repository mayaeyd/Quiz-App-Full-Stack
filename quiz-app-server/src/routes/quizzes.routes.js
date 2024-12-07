import { Router } from "express";
import {
  createQuiz,
  deleteQuiz,
  getQuizzes,
  updateQuiz,
} from "../controllers/quizzes.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { adminMiddleware } from "../middlewares/admin.middleware";

const router = Router();

router.get("/:id?", authMiddleware, getQuizzes);
router.post("/", authMiddleware, adminMiddleware, createQuiz);
router.put("/:id", authMiddleware, adminMiddleware, updateQuiz);
router.delete("/:id", authMiddleware, adminMiddleware, deleteQuiz);

export default router;
