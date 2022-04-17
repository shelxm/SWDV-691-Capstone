import React from 'react';

const TruckCard = ({foodtruck}) => {
    console.log(foodtruck);
    return (
        <div class="card mb-2">
            <h5 className="card-header">{foodtruck.name}</h5>
            <div className="card-body">
                <h5 className="card-title">{foodtruck.location}</h5>
                <p className="card-text">{foodtruck.hours}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
};

export default TruckCard;