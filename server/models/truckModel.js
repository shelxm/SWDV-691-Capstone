import mongoose from "mongoose";

const truckSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    cityState: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true,
    },
    latitude: {
        type: String,
        required: true,
    },
    longitude: {
        type: String,
        required: true,
    },
    hours: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    }
});

const Truck = mongoose.model('Foodtruck', truckSchema)

export default Truck;