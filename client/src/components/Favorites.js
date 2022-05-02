import React, { useState, useEffect } from "react";
import axios from "axios";
import GenTruckList from "./GenTruckList";
import API from './redux/api';

const Favorites = () => {
  const [favoritedTrucks, setFavoritedTrucks] = useState([]);

  async function loadFavorites() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    const token = user.token;
    axios
      .get(API + "user/favorites/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        res.data.forEach(foodtruck => {
          foodtruck.isFavorite= true;
        });
        setFavoritedTrucks(res.data);
      })
      .catch((err) => {
        console.log("Error from GenTruckList.");
      });
  }
  useEffect(async () => {
    await loadFavorites();
  }, []);

  async function onUpdated() {
    console.log('This worked')
    await loadFavorites();
  }

  return (
    <div className="container">
      <GenTruckList foodTrucks={favoritedTrucks} onUpdated={onUpdated}/>
    </div>
  );
};

export default Favorites;
