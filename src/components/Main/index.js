import React, { useState, useEffect } from "react";

import Sidebar from "../Sidebar";
import Candidate from "../Candidate";
import Header from "../templates/Header";

import { useUsers } from "../../context/Users";

import "./styles.css";

export default function Main() {
  const { users, setUsers } = useUsers();

  function toggleTrash(phone) {
    const newUsers = users.map(user => {
      console.log(user);
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

  return (
    <div id="app">
      <Header />
      <div id="wraper">
        <Sidebar />
        <main>
          <ul>
            {users.map(user => (
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
