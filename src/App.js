import React from "react";
import "./global.css";
import "./app.css";

import Header from "./components/templates/Header";
import Sidebar from "./components/Sidebar";
import Candidate from "./components/Candidate";

function App() {
  return (
    <div id="app">
      <Header />
      <div id="wraper">
        <Sidebar />
        <main>
          <ul>
            <Candidate />
            <Candidate />
          </ul>
        </main>
      </div>
    </div>
  );
}

export default App;
