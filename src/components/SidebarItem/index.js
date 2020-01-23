import React from "react";
import "./styles.css";

export default function SidebarItems({ iconName, text }) {
  return (
    <span>
      <i className="material-icons">{iconName}</i>
      <p>{text}</p>
    </span>
  );
}
