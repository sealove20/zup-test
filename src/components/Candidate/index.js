import React from "react";
import "./styles.css";

export default function Candidates() {
  return (
    <li className="candidate">
      <span className="candidate-name-photo">
        <img
          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
          alt="user"
        />
        <p className="candidate-name">Tom</p>
      </span>
      <p className="candidadte-email">tom@gmail.com</p>
      <p className="candidate-phone">(960)-861-1809</p>
      <p className="candidate-address">São Paulo - SP</p>
      <span className="action-icons">
        <i className="material-icons">delete</i>
        <i className="material-icons">select_all</i>
        <i className="material-icons">check</i>
      </span>
    </li>
  );
}
