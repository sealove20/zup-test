import React from "react";
import Main from "../../Main";

function Atendidos(props) {
  return <Main where={props.match.path} />;
}

export default Atendidos;
