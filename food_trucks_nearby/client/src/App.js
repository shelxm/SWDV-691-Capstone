import React from 'react';
import Header from './components/header.js';
import Home from './components/Home.js';
import FoodTrucks from './components/FoodTrucks.js';
import About from './components/About.js';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

export default function App() {
    return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/foodtrucks' element={<FoodTrucks/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }