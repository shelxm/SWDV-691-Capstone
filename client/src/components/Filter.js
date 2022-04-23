import React from 'react';

const Filter = (props) => {
    return (
        <div>
            <label>
                <strong>Filter:</strong>
                <select onChange={(e) => props.updateFilter(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Ames, IA">Ames, IA</option>
                    <option value="Davenport, IA">Davenport, IA</option>
                    <option value="Iowa City, IA">Iowa City, IA</option>
                </select>
            </label>
        </div>
    );
};

export default Filter;