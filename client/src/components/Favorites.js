import React, { useState, useEffect } from "react";
import axios from "axios";
import GenTruckList from "./GenTruckList";

const Favorites = () => {
  const [favoritedTrucks, setFavoritedTrucks] = useState([]);

  useEffect(() => {
    // window.localStorage.setItem('user', JSON.stringify(response.data))
    const user = JSON.parse(window.localStorage.getItem("user"));
    const token = user.token;
    axios
      .get("http://localhost:5000/user/favorites", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFavoritedTrucks(res.data);
      })
      .catch((err) => {
        console.log("Error from GenTruckList.");
      });
  }, []);

  return (
    <div>
      <GenTruckList foodTrucks={favoritedTrucks} />
    </div>
  );
};

export default Favorites;
