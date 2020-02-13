import React from "react";
import "./styles.css";

import Search from "../../Search";

export default function Header({ where }) {
  return (
    <header>
      <img
        src="https://www.vippng.com/png/full/168-1687487_more-free-square-design-png-images-best-png.png"
        alt="Logo"
      />
      <Search where={where} />
      <i className="material-icons">account_circle</i>
    </header>
  );
}
