import express from 'express';
import bodyParser from 'body-Parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app= express();

import foodTruckRoutes from './routes/foodtrucks.js';

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/foodtrucks', foodTruckRoutes);

const dbConnection =  'mongodb+srv://capstoneUser:(Letmein691)@cluster0.p8zn4.mongodb.net/foodTrucksNearbydb?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(dbConnection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Connected to MongoDB!')))
    .catch((error) => console.log(error.message));