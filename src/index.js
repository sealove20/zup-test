import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { UsersProvider } from "./context/Users";

import "./index.css";

ReactDOM.render(
  <BrowserRouter>
    <UsersProvider>
      <Routes />
    </UsersProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
