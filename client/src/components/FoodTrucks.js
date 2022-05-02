import { useState, useEffect } from "react";
import axios from "axios";
import GenTruckList from "./GenTruckList";
import Filter from "./Filter";
import SearchBar from "./SearchBar";
import API from './redux/api';

const FoodTrucks = () => {
  const [foodTrucks, setFoodTrucks] = useState();
  const [filteredTrucks, setFilteredTrucks] = useState();
  const [searchedTrucks, setSearchedTrucks] = useState();


  async function loadFoodTrucks() {
    const res = await axios.get(API + "foodtrucks");
    console.log(res.data);
    
    const user = JSON.parse(window.localStorage.getItem("user"));
    if(user) {
      const token = user.token;
      const favorites = await axios.get(API + "user/favorites/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      res.data.forEach((truck) => {
      truck.isFavorite= favorites.data.some(favorite => favorite._id === truck._id)
        
      });
    }
    setFoodTrucks(res.data);
    setFilteredTrucks(res.data);
    setSearchedTrucks(res.data);
  }

  useEffect(async () => {
    await loadFoodTrucks();
  },[]);
      

  function onFilterChange(filter) {
    let result = foodTrucks;
    if (filter !== "All") {
      result = result.filter((foodtruck) => foodtruck.cityState === filter);
    }
    setFilteredTrucks(result);
    setSearchedTrucks(result);
  }

  function onSearch(query) {
    let result = filteredTrucks;
    if (query) {
      //If search is empty no effect on results, if search query act on filtered data using object tags
      //if seatch is empty setSearchedTrucks = filteredTrucks
      //If search query, set searched trucks to be filtered trucks such that there is some truck that has tags that match the search query

      result = result.filter((foodtruck) =>
        foodtruck.tags
          .map((tag) => tag.toLowerCase())
          .some((tag) => tag.startsWith(query.toLowerCase()))
      );
    }
    setSearchedTrucks(result);
  }

  async function onUpdated() {
    console.log('This worked')
    await loadFoodTrucks();
  }

  return (
    <div className="container">
      <p>Welcome to the food truck page</p>
      <Filter onFilterChange={onFilterChange} />
      <SearchBar onSearch={onSearch} />
      <GenTruckList foodTrucks={searchedTrucks} onUpdated={onUpdated} />
    </div>
  );
};

export default FoodTrucks;
