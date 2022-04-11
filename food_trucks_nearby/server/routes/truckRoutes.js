import express from "express";
import { getTrucks, addTruck, getById } from "../controllers/foodTrucks.js";

const router = express.Router();

router.get('/', getTrucks);
router.post('/', addTruck);
router.get("/:id", getById);
//router.delete("/:id", deleteTruck);

export default router;