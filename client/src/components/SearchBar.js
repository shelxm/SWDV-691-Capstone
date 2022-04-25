import React, { useState } from "react";

const SearchBar = (props) => {
  const [query, setQuery] = useState("");
  function handleChange(event) {
    setQuery(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    props.onSearch(query);
  }

  function handleReset(event) {
    props.onSearch("");
    setQuery("");
  }

  return (
    <div className="container">
      <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
        <input
          class="form-control mr-sm-2"
          type="search"
          value={query}
          placeholder="Search"
          aria-label="Search"
          onChange={handleChange}
        />
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
          Search
        </button>
        <button
          class="btn btn-outline-danger my-2 my-sm-0"
          type="button"
          onClick={handleReset}
        >
          Clear
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
