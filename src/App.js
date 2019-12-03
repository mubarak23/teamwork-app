import React, { Fragment } from "react";
//mport Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
//import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/layout/Home";
import CreatePost from "./components/post/CreatePost";
import Dashboard from "./components/dashboard/Dashboard";
import mainLogin from "./views/LoginPage";
import mainRegister from "./views/RegisterPage";
import { Route } from "react-router-dom";
//import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./apps.css";

function App() {
  //return console.log("Test");
  return (
    <div className="App">
      <Navbar />
      <Fragment>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={mainRegister} />
        <Route path="/login" component={mainLogin} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/createpost" component={CreatePost} />
      </Fragment>
    </div>
  );
}

export default App;
