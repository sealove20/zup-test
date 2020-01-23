import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <header>
      <img
        src="https://www.vippng.com/png/full/168-1687487_more-free-square-design-png-images-best-png.png"
        alt="Logo"
      />
      <div className="search-container">
        <i className="material-icons">search</i>
        <input
          type="search"
          name="search-candidate"
          id="search-candidate"
          placeholder="Buscar"
        />
      </div>
      <i className="material-icons">account_circle</i>
    </header>
  );
}
