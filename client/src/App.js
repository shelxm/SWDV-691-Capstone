import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header.js";
import Home from "./components/pages/Home.js";
import FoodTrucks from "./components/FoodTrucks.js";
import About from "./components/pages/About.js";
import Login from "./components/pages/Login.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/pages/Register.js";
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/foodtrucks" element={<FoodTrucks />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
