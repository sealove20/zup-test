import React from "react";
import "./styles.css";

export default function Candidates({ name, email, phone, address, photo }) {
  return (
    <li className="candidate">
      <span className="candidate-name-photo">
        <img src={photo.thumbnail} alt="user" />
        <p className="candidate-name">{name.first}</p>
      </span>
      <p className="candidadte-email">{email}</p>
      <p className="candidate-phone">{phone}</p>
      <p className="candidate-address">{address.city}</p>
      <span className="action-icons">
        <i className="material-icons">delete</i>
        <i className="material-icons">select_all</i>
        <i className="material-icons">check</i>
      </span>
    </li>
  );
}
