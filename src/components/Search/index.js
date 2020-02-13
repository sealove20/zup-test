import React, { useState, useEffect } from "react";

import "./styles.css";

import { useUsers } from "../../context/Users";
import getFilter from "../../utils/getFilter";

function Search({ where }) {
  const [query, setQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const { users, setUsers } = useUsers();
  const listUsers = getFilter(users, where);
  const BUsers = users;

  useEffect(() => {
    console.log("BACKUP", BUsers);
    const res = listUsers.filter(user => user.name.first.includes(query));
    console.log(res);
    console.log(query);
    setSearchResult(res);
    query === "" ? setUsers(BUsers) : setUsers(res);
  }, [query]);

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="search-container">
      <i className="material-icons">search</i>
      <input
        type="search"
        name="search-candidate"
        id="search-candidate"
        placeholder="Buscar"
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
