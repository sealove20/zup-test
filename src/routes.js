import React from "react";
import { Switch, Route } from "react-router-dom";

import Todos from "./components/pages/Todos";
import Atendidos from "./components/pages/Atendidos";
import Lixeira from "./components/pages/Lixeira";
import SeeUserData from "./components/pages/SeeUserData";

export const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={Todos} exact />
      <Route path="/atendidos" component={Atendidos} strict />
      <Route path="/lixeira" component={Lixeira} exact />
      <Route path="/lixeira/:phone" component={SeeUserData} />
    </Switch>
  );
};
