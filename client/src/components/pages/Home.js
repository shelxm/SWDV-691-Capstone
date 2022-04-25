import React, { useState, useEffect } from "react";
import Favorites from "../Favorites";

const Home = () => {
  const [isLoggedIn, setLogin] = useState();

  useEffect(() => {
    if (window.localStorage.getItem("user") !== null) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [isLoggedIn]);

  console.log(isLoggedIn);

  return (
    <div class="container">
      <p>Welcome to the home page</p>
      <br />
      <br />
      <h3>Favorites</h3>
      {isLoggedIn ? <Favorites /> : <p>Please login to use favorites</p>}
    </div>
  );
};

export default Home;
