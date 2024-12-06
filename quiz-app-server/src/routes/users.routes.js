import express, { Router } from "express";
import {
  createUser,
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/users.controller.js";

const router = new Router();

router.get("/:id?", getUsers);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
