import express from "express";

import { getTrucks } from "../controllers/foodTrucks.js";

const router = express.Router();

router.get('/', getTrucks);

export default router;