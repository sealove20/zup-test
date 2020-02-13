import React from "react";
import Main from "../../Main";

function Lixeira(props) {
  return <Main where={props.match.path} />;
}

export default Lixeira;
