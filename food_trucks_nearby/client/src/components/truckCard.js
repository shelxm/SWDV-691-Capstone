import React from 'react';

const TruckCard = (props) => {
    const foodTruck = props.foodTruck;

    return (
        <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."/>
            <div class="card-body">
                <h2>{foodTruck.name}</h2>
                <h3>{foodTruck.location}</h3>
                <h3>{foodTruck.hours}</h3>
            </div>
        </div>
    )
};

export default TruckCard;