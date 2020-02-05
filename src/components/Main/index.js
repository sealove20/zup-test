import React, { useState, useEffect } from "react";

import Sidebar from "../Sidebar";
import Candidate from "../Candidate";
import Header from "../templates/Header";

import { useUsers } from "../../context/Users";

export default function Main() {
  const { users } = useUsers();

  return (
    <div id="app">
      <Header />
      <div id="wraper">
        <Sidebar />
        <main>
          <ul>
            {users.map(user => (
              <Candidate
                key={user.id.value}
                name={user.name}
                email={user.email}
                phone={user.phone}
                address={user.location}
                photo={user.picture}
              />
            ))}
          </ul>
        </main>
      </div>
    </div>
  );
}
