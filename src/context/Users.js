import React, { useState, useEffect, createContext, useContext } from "react";

import { getUsers } from "../services/api";

export const UsersContext = createContext();

export function UsersProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function getAllUsers() {
      const userData = await getUsers();
      const { results } = userData;
      const data = results.map(user => ({
        ...user,
        isAttended: false,
        isTrash: false,
        isAll: false
      }));
      setUsers(data);
      setLoading(false);
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
