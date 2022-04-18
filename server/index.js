import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
require('dotenv').config();

const app= express();

import foodTruckRoutes from './routes/truckRoutes.js';
import userRoutes from './routes/userRoutes.js';

app.use(express.json({extended: true}));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/foodtrucks', foodTruckRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
    res.send('App is running')
})

const PORT = process.env.PORT || 5000;

const path = require("path");

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

mongoose.connect(process.env.dbConnection, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Connected to MongoDB!')))
    .catch((error) => console.log(error.message));