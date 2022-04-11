import express from 'express';
import { getUsers } from '/../controllers/User.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/', addTruck);
router.get("/:id", getById);
//router.delete("/:id", deleteTruck);

export default router;