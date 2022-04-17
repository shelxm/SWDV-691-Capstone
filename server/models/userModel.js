import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name']
    },
    email: {
        type: String,
        required: [true, 'Please enter your email address'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    role: {
        type: String,
        default: 'User',
        enum: [
            'Admin',
            'User'
        ]
    },
    favorites: {type: [], ref: "FoodTrucks"}
});

const User = mongoose.model('Users', userSchema)

export default User;