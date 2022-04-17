import express from 'express';
import { getUsers, registerUser, loginUser } from '../controllers/user.js';

const router = express.Router();

router.get('/', getUsers);
router.post('/register', registerUser)
router.post('/login', loginUser)

export default router;