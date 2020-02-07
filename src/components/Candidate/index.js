import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

export default function Candidates({ user, toggleLixeira }) {
  const { name, email, phone, location, picture, isLixeira } = user;
  console.log("ASJIASJJASUASHUSAHUAHUASHUASHUSAHUASHUSHUASHUA", user);
  return (
    <Link
      to={{
        pathname: `/lixeira/${phone}`,
        data: user
      }}
      style={{ textDecoration: "none" }}
    >
      <li className="candidate">
        <span className="candidate-name-photo">
          <img src={picture.thumbnail} alt="user" />
          <p className="candidate-name">{name.first}</p>
        </span>
        <p className="candidadte-email">{email}</p>
        <p className="candidate-phone">{phone}</p>
        <p className="candidate-address">{location.city}</p>
        <span className="action-icons">
          <i
            className="material-icons"
            style={{ color: isLixeira ? "#f0f" : "#ff0" }}
            onClick={e => {
              e.preventDefault();
              toggleLixeira(phone);
            }}
          >
            delete
          </i>
          <i className="material-icons">select_all</i>
          <i className="material-icons">check</i>
        </span>
      </li>
    </Link>
  );
}
