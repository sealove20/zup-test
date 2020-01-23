import React from "react";
import "./styles.css";

import SidebarItem from "../SidebarItem";

export default function Sidebar() {
  return (
    <aside>
      <SidebarItem iconName={"select_all"} text={"Todos"} />
      <SidebarItem iconName={"done_all"} text={"Atendidos"} />
      <SidebarItem iconName={"delete_sweep"} text={"Lixeira"} />
    </aside>
  );
}
