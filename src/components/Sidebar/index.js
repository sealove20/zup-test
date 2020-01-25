import React from "react";
import { NavLink } from "react-router-dom";

import "./styles.css";

import SidebarItem from "../SidebarItem";

export default function Sidebar() {
  return (
    <aside>
      <NavLink
        className="links"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        to="/"
      >
        <SidebarItem iconName={"select_all"} text={"Todos"} />
      </NavLink>
      <NavLink
        className="links"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        to="/atendidos"
      >
        <SidebarItem iconName={"done_all"} text={"Atendidos"} />
      </NavLink>
      <NavLink
        className="links"
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
        to="/lixeira"
      >
        <SidebarItem iconName={"delete_sweep"} text={"Lixeira"} />
      </NavLink>
    </aside>
  );
}
