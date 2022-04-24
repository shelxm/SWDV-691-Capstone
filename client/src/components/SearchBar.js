import React, { useState } from 'react';

function SearchBar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = data.filter((value) => { return value.tags.toLowerCase().includes(searchWord.toLowerCase());
        });
    }
}