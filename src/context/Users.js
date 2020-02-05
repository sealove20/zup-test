import React, { useState, useEffect, createContext, useContext } from "react";

import { getUsers } from "../services/api";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getAllUsers() {
      const data = await getUsers();
      const { results } = data;
      const data2 = results.map(d => ({
        ...d,
        isAtendido: false,
        isLixeira: false,
        isTodos: false
      }));
      console.log("DATA@", data2);
      setUsers(data2);
      setLoading(false);
      console.log("QUEISSO", data.results);
    }
    getAllUsers();
  }, []);
  return (
    <>
      {loading ? (
        <p>CARREGANDO</p>
      ) : (
        <UsersContext.Provider value={{ users, setUsers }}>
          {children}
        </UsersContext.Provider>
      )}
    </>
  );
}

export function useUsers() {
  const context = useContext(UsersContext);
  const { users, setUsers } = context;
  return { users, setUsers };
}
