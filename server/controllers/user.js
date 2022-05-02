import express from "express";
import jwt from "jsonwebtoken";

import User from "../models/userModel.js";
import Truck from "../models/truckModel.js";

const router = express.Router();

export const secret = "test";

//Retrieve all users
export const getUsers = async (req, res) => {
  try {
    const user = await User.find();

    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({
      message: "Error. Could not find any users."
    });
  }
};

export const loginUser = async (req, res, next) => {
  const {
    email,
    password
  } = req.body;
  let existingUser;
  //verify user exists
  try {
    existingUser = await User.findOne({
      email
    });
  } catch (err) {
    return console.log(err);
  }
  //response if user does not exist
  if (!existingUser) {
    return res.status(400).json({
      message: "No user found. Please try again or register for an account",
    });
  }
  //authenticate password against database
  let testPassword = password;
  if (testPassword != existingUser.password) {
    return res.status(400).json({
      message: "Incorrect password. Please try again or register for an account",
    });
  }
  //generate token
  const token = jwt.sign({
      email: existingUser.email,
      id: existingUser._id
    },
    secret, {
      expiresIn: 86400
    }
  );
  return res.status(200).json({
    auth: true,
    existingUser,
    token,
    message: "Successfully logged in",
  });
};

//Register new user
export const registerUser = async (req, res) => {
  console.log(JSON.stringify(req.body));
  const {
    name,
    email,
    password
  } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({
      email
    });
  } catch (err) {
    return console.log("An error occured. Please try again");
  }
  if (existingUser) {
    return res
      .status(400)
      .json({
        message: "User already exists. Please login instead"
      });
  }
  const user = new User({
    name,
    email,
    password,
  });
  try {
    await user.save();
  } catch (err) {
    console.error(err);
    return console.log("There was an error when registering. Please try again");
  }
  const token = jwt.sign({
    email: user.email,
    id: user._id
  }, secret, {
    expiresIn: 86400,
  });
  return res.status(201).json({
    user,
    token
  });
};

export const getFavorites = async (req, res) => {
  //get jwt token from header
  // header Authorization: Bearer <token>
  const token = req.headers.authorization.split(" ")[1];
  //verify token
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Unauthorized request"
      });
    }
    //get user id from decoded token
    const userId = decoded.id;
    //find user by id
    User.findById(userId, (err, user) => {
      if (err) {
        return res.status(400).json({
          message: "Error. Could not find user"
        });
      }
      //return user favorites
      const favoriteIds = user.favorites;
      Truck.find({
        _id: {
          $in: favoriteIds
        }
      }, (err, trucks) => {
        return res.status(200).json(trucks);
      });
    });
  });
};

export const addFavorite = async (req, res) => {
  //get jwt token from header
  // header Authorization: Bearer <token>
  const token = req.headers.authorization.split(" ")[1];
  //verify token
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Unauthorized request"
      });
    }
    //get user id from decoded token
    const userId = decoded.id;
    //find user by id
    User.findById(userId, (err, user) => {
      if (err) {
        return res.status(400).json({
          message: "Error. Could not find user"
        });
      }
      //return user favorites
      const truckId = req.body.truckId;
      user.favorites.push(truckId)
      user.save();
      return res.status(202).json();
    });
  });
};

export const removeFavorite = async (req, res) => {
  //get jwt token from header
  // header Authorization: Bearer <token>
  const token = req.headers.authorization.split(" ")[1];
  //verify token
  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        message: "Unauthorized request"
      });
    }
    //get user id from decoded token
    const userId = decoded.id;
    //find user by id
    User.updateOne({
      _id: userId
    }, {
      $pullAll: {
        favorites: [req.params.truckId],
      },
    }, null, (err, user) => {
      if (err) {
        return res.status(500).json({
          message: err
        });
      } else 
      return res.status(200).json();
    });
  });
};

export default router;