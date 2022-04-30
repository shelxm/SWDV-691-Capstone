import express from "express";
import {
  getFavorites,
  getUsers,
  registerUser,
  loginUser,
  addFavorite,
  removeFavorite
} from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/favorites", getFavorites);
router.post("/favorites", addFavorite);
router.delete("/favorites/:truckId", removeFavorite);

export default router;
