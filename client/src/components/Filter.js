import React from "react";

const Filter = (props) => {
  function handleChange(event) {
    props.onFilterChange(event.target.value);
  }
  return (
    <div className="container mb-2">
      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => handleChange(e)}>
          <option value="All">All</option>
          <option value="Ames, IA">Ames, IA</option>
          <option value="Davenport, IA">Davenport, IA</option>
          <option value="Des Moines, IA">Des Moines, IA</option>
          <option value="Iowa City, IA">Iowa City, IA</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
