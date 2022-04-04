import mongoose from "mongoose";

const truckSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    hours: {
        type: String,
        required: true,
    }
});

const TruckCard = mongoose.model('Foodtruck', truckSchema)

export default TruckCard;