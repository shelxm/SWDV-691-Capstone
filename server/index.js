import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

const app= express();

import foodTruckRoutes from './routes/truckRoutes.js';
import userRoutes from './routes/userRoutes.js';

app.use(express.json({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/foodtrucks', foodTruckRoutes);
app.use('/user', userRoutes);

/*
const path= require("path");
app.use(express.static(path.join(__dirname, '../build')))
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build'))
});*/

const dbConnection =  'mongodb+srv://capstoneUser:(Letmein691)@cluster0.p8zn4.mongodb.net/foodTrucksNearbydb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(dbConnection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Connected to MongoDB!')))
    .catch((error) => console.log(error.message));