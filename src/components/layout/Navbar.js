import React from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../store/actions/authActions";
import "./style.css";
const Navbar = () => {
  return (
    <div id="navbar">
      {isAuthenticated() ? (
        <Link to="/dashboard">Dashboard</Link>
      ) : (
        <Link to="/home">Home</Link>
      )}

      {isAuthenticated() ? (
        <Link to="/dashboard/create-article">Make a Post</Link>
      ) : (
        <Link to="/login">Login</Link>
      )}

      {isAuthenticated() ? (
        <Link to="/dashboard/post-gif">Post Gif</Link>
      ) : (
        <Link to="/register">Register</Link>
      )}

      <a href="#contact">contact</a>
    </div>
  );
};

export default Navbar;
