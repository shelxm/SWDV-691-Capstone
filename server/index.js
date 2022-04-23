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

app.get('/', (req, res) => {
    res.send('App is running')
})

const PORT = process.env.PORT || 5000;

/*__dirname= path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "./client/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
  })
}
  else {
    app.get('/', (req, res) => {
      res.send('API is running')
    });
  }*/

mongoose.connect("mongodb+srv://capstoneUser:(Letmein691)@cluster0.p8zn4.mongodb.net/foodTrucksNearbydb?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log('Connected to MongoDB!')))
    .catch((error) => console.log(error.message));