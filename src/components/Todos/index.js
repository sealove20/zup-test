import React from "react";

import "./styles.css";

import Header from "../templates/Header";
import Sidebar from "../Sidebar";
import Candidate from "../Candidate";

function Todos() {
  return (
    <div id="app">
      <Header />
      <div id="wraper">
        <Sidebar />
        <main>
          <ul>
            <Candidate />
          </ul>
        </main>
      </div>
    </div>
  );
}

export default Todos;
