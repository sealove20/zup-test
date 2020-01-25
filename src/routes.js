import React from "react";
import { Switch, Route } from "react-router-dom";

import Todos from "./components/Todos";
import Atendidos from "./components/Atendidos";
import Lixeira from "./components/Lixeira";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Todos} exact />
      <Route path="/atendidos" component={Atendidos} strict />
      <Route path="/lixeira" component={Lixeira} strict />
    </Switch>
  );
};
