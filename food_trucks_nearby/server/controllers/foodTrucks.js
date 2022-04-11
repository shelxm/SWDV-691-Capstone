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
        return res.status(500)
.json({message: 'The food truck could not be added'});
    }
}
//Adds new food truck
/*export const addTruck = async (req, res, next) => {
    const { name, location, longitude, latitude, hours, imgUrl, tags} = req.body;
    let truck;
    try {
        truck= new Truck ({
            name,
            location,
            longitude,
            latitude,
            hours,
            imgUrl,
            tags
        });
        await Truck.save();
    } catch (err) {
        console.log(err)
    }

    if (!truck) {
        return res.status(500).json({message: 'Unable to add the food truck.'});
    }
    return res.status(201).json ({ truck });
};*/

/* Alt add food truck
export const addTruck = async (req, res, next) => {
    const newTruck = await Truck.create(req.body);
    res.status(201).json({
        success: true,
        newTruck
    })
};
*/
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

/* Attempting to remove food trucks
export const deleteTruck = async (req, res) => {
    const id = req.params.id;
    const truckToDelete = await Truck.findByIdAndRemove(id)
    try {
        return res.status(203).json({message: "Truck was successfully deleted."})
    } catch (error) {
        return res.status(500).json({message: 'The truck could not be deleted.'})
    }
};*/

export default router;