import React from "react";

import Main from "../../Main";

function Todos(props) {
  return (
    <>
      <Main />
      {console.log(props.match)}
    </>
  );
}

export default Todos;
