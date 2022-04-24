import { useState, useEffect } from "react";
import axios from "axios";
import GenTruckList from "./truckList";
import Filter from "./Filter";

const FoodTrucks = () => {
  const [foodTrucks, setFoodTrucks] = useState();
  const [filteredTrucks, setFilteredTrucks] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/foodtrucks")
      .then((res) => {
        setFoodTrucks(res.data);
        setFilteredTrucks(res.data);
      })
      .catch((err) => {
        console.log("Error from GenTruckList.");
      });
  }, []);

  function onFilterChange(filter) {
    let result = foodTrucks;
    if (filter !== "All") {
      result = result.filter((foodtruck) => foodtruck.cityState === filter);
    }
    setFilteredTrucks(result);
  }

  return (
    <div className="container">
      <p>Welcome to the food truck page</p>
      <Filter onFilterChange={onFilterChange} />
      <GenTruckList foodTrucks={filteredTrucks} />
    </div>
  );
};

export default FoodTrucks;
