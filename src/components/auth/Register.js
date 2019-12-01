import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import "./style.css";

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      name: "",
      avater_url: ""
    };
    this.onFildChange = this.onFildChange.bind(this);
    this.onRegisterSubmit = this.onRegisterSubmit.bind(this);
  }
  onFildChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onRegisterSubmit(e) {
    e.preventDefault();
    const headers = new Headers({
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
      "Access-Control-Allow-Headers": "X-Requested-With,content-type",
      "Access-Control-Allow-Credentials": true
    });
    const body = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      avater_url: this.state.avater_url
    };
    axios
      .post("http://127.0.0.1:3000/api/article", {
        body,
        headers
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }
  render() {
    return (
      <Fragment>
        <div className="container">
          <h1 className=" text-primary">Sign Up</h1>
          <p className="lead">Create Your Account</p>
          <div className="signup-content">
            <form className="form" onSubmit={this.onRegisterSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  onChange={this.onFildChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={this.onFildChange}
                />
                <small className="form-text">
                  This site uses Gravatar so if you want a profile image, use a
                  Gravatar email
                </small>
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.onFildChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Confirm Password"
                  name="password2"
                  onChange={this.onFildChange}
                />
              </div>
              <input
                type="submit"
                className="btn btn-primary"
                value="Register"
              />
            </form>
          </div>
          <p className="my-1">
            Already have an account? <a href="/login">Sign In</a>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default withRouter(Register);
