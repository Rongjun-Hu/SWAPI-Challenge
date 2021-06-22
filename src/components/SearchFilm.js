import React from "react";

const SearchFilm = ({ searchValue, setSearchValue }) => {
  return (
    <>
      <input
        className="search-input"
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Enter film title to search"
      />
    </>
  );
};

export default SearchFilm;
