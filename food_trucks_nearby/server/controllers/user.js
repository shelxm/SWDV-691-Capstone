import express from 'express';

import User from '../models/userModel.js';

const router = express.Router()

export const getUsers = async (req, res) => {
    try {
        const user = await User.find();

        res.status(200).json(user);

    } catch (error) {
        res.status(404).json({message: "Error. Could not find any users."});
    }
};

export const createUser = async

export default router;