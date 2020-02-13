import React, { useState, useEffect } from "react";

import Sidebar from "../Sidebar";
import Candidate from "../Candidate";
import Header from "../templates/Header";

import { useUsers } from "../../context/Users";
import getFilter from "../../utils/getFilter";

import "./styles.css";

export default function Main(props) {
  const [query, setQuery] = useState("");
  const { users, setUsers } = useUsers();
  const [searchResult, setSearchResult] = useState([]);
  const filteredUsers = getFilter(users, props.where);

  useEffect(() => {
    const results = filteredUsers.filter(user =>
      user.name.first.includes(query)
    );
    setSearchResult(results);
  }, [query, users]);

  function toggleTrash(phone) {
    const newUsers = users.map(user => {
      const { isTrash } = user;
      return phone === user.phone ? { ...user, isTrash: !isTrash } : user;
    });
    setUsers(newUsers);
  }

  function toggleAttended(phone) {
    const newUsers = users.map(user => {
      const { isAttended } = user;
      return phone === user.phone ? { ...user, isAttended: !isAttended } : user;
    });
    setUsers(newUsers);
  }

  function toggleAll(phone) {
    const newUsers = users.map(user => {
      const { isAll } = user;
      return phone === user.phone ? { ...user, isAll: !isAll } : user;
    });
    setUsers(newUsers);
  }

  function handleChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div id="app">
      <Header handleChange={handleChange} query={query} />
      <div id="wraper">
        <Sidebar query={query} />
        <main>
          <ul>
            {searchResult.map(user => (
              <Candidate
                user={user}
                key={user.phone}
                toggleTrash={toggleTrash}
                toggleAttended={toggleAttended}
                toggleAll={toggleAll}
              />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
