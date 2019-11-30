import React, { Fragment } from "react";
import Landing from "./components/layout/Landing";
import Navbar from "./components/layout/Navbar";
//import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <Landing />
        <Register />
      </Fragment>
    </div>
  );
}

export default App;
