import React, { Fragment } from "react";
//mport Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
//import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from "./components/layout/Home";
import CreatePost from "./components/post/CreatePost";
import Dashboard from "./components/dashboard/Dashboard";
import MainLogin from "./views/LoginPage";
import MainRegister from "./views/RegisterPage";
import MainDashboard from "../src/views/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { isAuthenticated } from "../src/store/actions/authActions";
//import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./apps.css";

function App() {
  //return console.log("Test");
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={MainRegister} />
          <Route path="/login" component={MainLogin} />
          <Route
            path="/dashboard"
            render={props =>
              isAuthenticated() ? <MainDashboard /> : <MainLogin />
            }
          />
          <Route path="/createpost" component={CreatePost} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
