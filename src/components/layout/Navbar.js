import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <div id="navbar">
      <Link to="/home">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <a href="#contact">contact</a>
    </div>
  );
};

export default Navbar;
