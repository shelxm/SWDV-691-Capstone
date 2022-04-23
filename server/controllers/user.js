import express from 'express';
import jwt from 'jsonwebtoken';

import User from '../models/userModel.js';

const router = express.Router()

export const secret="test";

export const getUsers = async (req, res) => {
    try {
        const user = await User.find();

        res.status(200).json(user);

    } catch (error) {
        res.status(404).json({message: "Error. Could not find any users."});
    }
};

export const loginUser = async (req, res, next) => {
    const {email, password} =req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({email});
    } catch (err) {
        return console.log(err);
    }
    if (!existingUser) {
        return res.status(400).json({ message: 'No user found. Please try again or register for an account'});
    }
    let testPassword = password;
    if (testPassword != existingUser.password) {
        return res.status(400).json({message: 'Incorrect password. Please try again or register for an account'})
    }
    const token = jwt.sign({email: existingUser.email, id: existingUser._id}, secret, {expiresIn: 86400})
    return res.status(200).json({auth: true, existingUser, token, message: "Successfully logged in"})
};

export const registerUser = async (req,res) => {
    console.log(JSON.stringify(req.body));
    const { name, email, password } = req.body;
    let existingUser;
    try {
        existingUser = await User.findOne({ email });
    } catch (err) {
        return console.log('An error occured. Please try again')
    }
    if (existingUser) {
        return res.status(400).json({message: 'User already exists. Please login instead'});
    }
    const user = new User({
        name,
        email,
        password
    });
    try {
        await user.save();
    } catch (err) {
        console.error(err);
        return console.log('There was an error when registering. Please try again')
    }
    const token = jwt.sign({email: user.email, id: user._id}, secret, {expiresIn: 86400})
    return res.status(201).json({user, token})
}

export const logoutUser = (req, res) => {

}

export default router;