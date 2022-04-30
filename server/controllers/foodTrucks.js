import express from 'express';
import Truck from "../models/truckModel.js";

const router = express.Router()

//Retrieves all stored food trucks
export const getTrucks = async (req, res) => {
    try {
        const truck = await Truck.find();

        res.status(200).json(truck);

    } catch (error) {
        res.status(404).json({message: "Error, no books were found."});
    }
}

//Adds a new food truck
export const addTruck = async (req, res) => {
    const newTruck= await Truck.create(req.body);
    try {
        return res.status(201).json(newTruck);
    } catch (error) {
        return res.status(500).json({message: 'The food truck could not be added'});
    }
}

// Retrives specific food truck object by id
export const getById = async (req, res) => {
    const id = req.params.id;
    let truck;
    try {
        truck = await Truck.findById(id);
    } catch (err) {
        console.log(err);
    }
    if (!truck) {
        return res.status(500).json({message: "No food truck found"})
    }
    return res.status(200).json({ truck });
};

// Deletes food truck
export const deleteTruck = async (req, res) => {
    const truck = await Truck.findById(req.params.id);

    if (!truck) return res.status(404).send("No truck was found.");

    const deletedTruck = await Truck.findByIdAndDelete(req.params.id);

    res.send(deletedTruck);
};

export default router;