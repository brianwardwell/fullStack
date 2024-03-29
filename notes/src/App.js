import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from './Components/PrivateRoute';
import Login from "./Components/Login";
import Home from "./Components/Home";
import Register from "./Components/Register";
import MainPage from "./Components/MainPage"
import "./App.css";

function App () {

  return (
    <div >
      <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/users/register" component={Register} />

        <Route path="/users/login" component={Login} />

        <PrivateRoute path="/users/notes" component={MainPage}/>
        <Route path="*" component={() => "404 Page Not Found"} />
      </Switch>
    </div>
  );
}

export default App;
