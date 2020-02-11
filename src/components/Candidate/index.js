import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

export default function Candidates({
  user,
  toggleTrash,
  toggleAttended,
  toggleAll,
  toggleIcon
}) {
  const {
    name,
    email,
    phone,
    location,
    picture,
    isTrash,
    isAttended,
    isAll
  } = user;
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
            style={{ color: isTrash ? "#b3c02b" : "#707d89" }}
            onClick={e => {
              e.preventDefault();
              toggleTrash(phone);
            }}
          >
            delete
          </i>
          <i
            className="material-icons"
            style={{ color: isAll ? "#b3c02b" : "#707d89" }}
            onClick={e => {
              e.preventDefault();
              toggleAll(phone);
            }}
          >
            select_all
          </i>
          <i
            className="material-icons"
            style={{ color: isAttended ? "#b3c02b" : "#707d89" }}
            onClick={e => {
              e.preventDefault();
              toggleAttended(phone);
            }}
          >
            check
          </i>
        </span>
      </li>
    </Link>
  );
}
