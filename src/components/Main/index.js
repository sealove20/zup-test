import React, { useState, useEffect } from "react";

import Sidebar from "../Sidebar";
import Candidate from "../Candidate";
import Header from "../templates/Header";

import { useUsers } from "../../context/Users";

import "./styles.css";

export default function Main() {
  const { users, setUsers } = useUsers();

  function toggleLixeira(phone) {
    const newUsers = users.map(user => {
      const { isLixeira } = user;
      return phone === user.phone ? { ...user, isLixeira: !isLixeira } : user;
    });
    setUsers(newUsers);
  }

  function toggleAtendido(phone) {
    const newUsers = users.map(user => {
      const { isAtendido } = user;
      return phone === user.phone ? { ...user, isAtendido: !isAtendido } : user;
    });
    setUsers(newUsers);
  }

  function toggleTodos(phone) {
    const newUsers = users.map(user => {
      const { isTodos } = user;
      return phone === user.phone ? { ...user, isTodos: !isTodos } : user;
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
                toggleLixeira={toggleLixeira}
                toggleAtendido={toggleAtendido}
                toggleTodos={toggleTodos}
              />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
