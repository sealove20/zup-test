import React, { useState, useEffect } from "react";

import "./styles.css";
function Search({ query, handleChange }) {
  return (
    <div className="search-container">
      <i className="material-icons">search</i>
      <input
        type="search"
        name="search-candidate"
        id="search-candidate"
        placeholder="Buscar"
        value={query}
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
