import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";

export default function Candidates({
  user,
  toggleLixeira,
  toggleAtendido,
  toggleTodos
}) {
  const {
    name,
    email,
    phone,
    location,
    picture,
    isLixeira,
    isAtendido,
    isTodos
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
            style={{ color: isLixeira ? "#b3c02b" : "#707d89" }}
            onClick={e => {
              e.preventDefault();
              toggleLixeira(phone);
            }}
          >
            delete
          </i>
          <i
            className="material-icons"
            style={{ color: isTodos ? "#b3c02b" : "#707d89" }}
            onClick={e => {
              e.preventDefault();
              toggleTodos(phone);
            }}
          >
            select_all
          </i>
          <i
            className="material-icons"
            style={{ color: isAtendido ? "#b3c02b" : "#707d89" }}
            onClick={e => {
              e.preventDefault();
              toggleAtendido(phone);
            }}
          >
            check
          </i>
        </span>
      </li>
    </Link>
  );
}
