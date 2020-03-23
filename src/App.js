import React, { useState } from 'react'
import Sell from './views/Sell'
import Add from "./views/Add";
import Edit from "./views/Edit";
import Resumen from "./views/Resumen";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ValidateSession from './components/ValidateSession'
import Login from './views/Login'
//import Logout from './views/Logout'
import api from './lib/api'


function App() {
const [authorization,setAuthorization] = useState('')
async function validateSession(token){
  const payload = await api.validateSession(token)
  setAuthorization(payload.data.token)
}  
return (
    <BrowserRouter>
      <div className="App">
      {authorization && <ValidateSession onValidate={validateSession} />}

        <Switch>
          
          <React.Fragment>
          <Route path="/login" component ={Login}/>
          <Route path="/" component={Resumen} exact />
          <Route path="/add" component={Add} exact />
          <Route path="/edit" component={Edit} exact />
          <Route path="/sell" component={Sell} exact />
          </React.Fragment>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
