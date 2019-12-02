import React, { Fragment } from "react";
//mport Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/layout/Home";
import { Route } from "react-router-dom";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  //return console.log("Test");
  return (
    <div className="App">
      <Navbar />
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
      </Fragment>
    </div>
  );
}

export default App;
