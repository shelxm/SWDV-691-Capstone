import React, { Component } from 'react';
import axios from 'axios';
import TruckCard from './truckCard';


class GenTruckList extends Component {
    constructor(props) {
        super(props);this.state = {
            foodtrucks: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:5000/foodtrucks').then(res => {
            this.setState({foodtrucks: res.data
            })
        })
        .catch(err =>{
            console.log('Error from GenTruckList.')
        })
    };

    render() {
        const foodtrucks = this.state.foodtrucks;
        console.log("ListTruck: " + foodtrucks);
        let foodTruckList;

        if (!foodtrucks) {
            foodTruckList = "No food trucks were found. Please try a different location."
        } else {
            foodTruckList = foodtrucks.map((foodtruck, k) =>
                <TruckCard foodtruck= {foodtruck} key={k} />
            );
        }

        return (
            <div className = "GenTruckList">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                        <br />
                        <h2 className="display-4 text-center">Food Truck List</h2>
                        </div>
                        <div className="list">
                            {foodTruckList}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GenTruckList;