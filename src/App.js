import React from "react";
import Sell from './views/Sell'
import Add from "./views/Add";
import Edit from "./views/Edit";
import Resumen from "./views/Resumen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ListItem from './components/ListItem'
import Dashboard from './components/DashBoard'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Dashboard />
        <ListItem />
        <Switch>
          <Route path="/" component={Resumen} exact />
          <Route path="/add" component={Add} exact />
          <Route path="/edit" component={Edit} exact />
          <Route path="/sell" component={Sell} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
