import { useEffect, useState } from "react";
import axios from 'axios';
import GenTruckList from './truckList';

const FoodTrucks = () => {
    return (
        <div className="container">
            <p>Welcome to the food truck page</p>
            <GenTruckList />
        </div>
    );
}

export default FoodTrucks;