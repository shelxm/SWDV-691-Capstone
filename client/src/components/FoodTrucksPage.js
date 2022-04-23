import React, { useState, useEffect, Component } from 'react';
import axios from 'axios';
import TruckCard from './truckCard';
import Filter from './Filter';

class FoodTrucksPage extends Component {
    state= {
        allTrucks: [],
        filter: "All",
    };

    componentDidMount = () => {
        axios.get('http://localhost:5000/foodtrucks').then((res) => res.json())
        .then((foodtrucks) => this.setState({ allTrucks: foodtrucks}))
    };

    updateFilter = (newFilter) => {
        this.setState({filter: newFilter});
    };

    displayTrucks = () => {
        let displayTrucks = this.state.allTrucks;

        if (this.state.filter !== "All") {
            displayTrucks = displayTrucks.filter((foodtruck) => foodtruck.cityState=== this.state.filter);
        }
        return displayTrucks
    };

    render() {
        return (
            <div>
                <Filter updateFilter={this.updateFilter}/>
                <TruckCard allTrucks={this.displayTrucks()}/>
            </div>
        )
    }
}

/*const FoodTrucksPage = ({foodtruck}) => {
    const [allData, setAllData] = useState([]);
    const [filteredData, setFilteredData] = useState(allData);
    const [searchData, setSearchData] = useState(filteredData);

    const handleSearch = (event) => {
    
    }

    useEffect (() => {
        axios.get('http://localhost:5000/foodtrucks').then(response => {
            console.log(response.data)
            setAllData(response.data);
            setFilteredData(response.data);
        }).catch(error => {
            console.log(error)
        })
    }, []);

    return (
        <div class="container">
            <p>Welcome to the home page</p>
        </div>
    );
}*/

export default FoodTrucksPage;