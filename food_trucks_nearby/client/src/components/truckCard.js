import React from 'react';

const TruckCard = ({obj}) => {
    return (
        <div class="card" style="width: 18rem;">
            <img src={obj.imgUrl}class="card-img-top" alt="..."/>
            <div class="card-body">
                <h2>{obj.name}</h2>
                <h3>{obj.location}</h3>
                <h3>{obj.hours}</h3>
            </div>
        </div>
    )
};

export default TruckCard;