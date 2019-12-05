import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <section className="landing">
      <div className="dark-overlay">
        <div className="lading-inner">
          <h2 className="x-large">Team Work</h2>
          <p className="lead">
            An Internal social media platform that allow company interact and
            bond between themselves
          </p>
          <div className="buttons">
            <Link to="/register">Register</Link>
            || <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
