import express from "express";
import {
  getFavorites,
  getUsers,
  registerUser,
  loginUser,
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/favorites", getFavorites);

export default router;
