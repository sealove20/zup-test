import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

import { ConvertStates } from "../../utils/ConvertState";

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
    location: { city, state },
    picture,
    isTrash,
    isAttended,
    isAll
  } = user;

  const address = `${city} - ${ConvertStates(state)}`;

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
        <p className="candidate-address">{address}</p>
        <span className="action-icons">
          <i
            className="material-icons"
            style={{ color: isTrash ? "#b3c02b" : "#a5a5a5" }}
            onClick={e => {
              e.preventDefault();
              toggleTrash(phone);
            }}
          >
            delete
          </i>
          <i
            className="material-icons"
            style={{ color: isAll ? "#b3c02b" : "#a5a5a5" }}
            onClick={e => {
              e.preventDefault();
              toggleAll(phone);
            }}
          >
            select_all
          </i>
          <i
            className="Large material-icons"
            style={{ color: isAttended ? "#b3c02b" : "#a5a5a5" }}
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
