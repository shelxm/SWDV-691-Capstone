import React, { Component } from "react";
import axios from "axios";
import TruckCard from "./truckCard";

function GenTruckList(props) {
  console.log(props);
  const foodtrucks = props.foodTrucks;
  console.log("ListTruck: " + foodtrucks);
  let foodTruckList;

  if (!foodtrucks) {
    foodTruckList =
      "No food trucks were found. Please try a different location.";
  } else {
    foodTruckList = foodtrucks.map((foodtruck, k) => (
      <TruckCard foodtruck={foodtruck} key={k} />
    ));
  }

  return (
    <div className="GenTruckList">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <h2 className="display-4 text-center">Food Truck</h2>
          </div>
          <div className="list">{foodTruckList}</div>
        </div>
      </div>
    </div>
  );
}

export default GenTruckList;
