import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/navbar.js';
import GenTruckList from './components/truckList.js';

export default function App() {
    return (
      <Router>
          <Header/>
      </Router>
    );
  }