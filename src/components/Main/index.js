import React, { useState, useEffect } from "react";

import Sidebar from "../Sidebar";
import Candidate from "../Candidate";
import Header from "../templates/Header";

import { getUsers } from "../../services/api";

export default function Main() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getAllUsers() {
      const data = await getUsers();
      const { results } = data;
      setUsers(results);
      setLoading(false);
      console.log("QUEISSO", data.results[0]);
    }
    getAllUsers();
  }, []);

  return (
    <div id="app">
      <Header />
      <div id="wraper">
        <Sidebar />
        {loading ? (
          <p>CARREGANDO</p>
        ) : (
          <main>
            <ul>
              {users.map(user => (
                <Candidate
                  key={user.id}
                  name={user.name}
                  email={user.email}
                  phone={user.phone}
                  address={user.location}
                  photo={user.picture}
                />
              ))}
            </ul>
          </main>
        )}
      </div>
    </div>
  );
}
