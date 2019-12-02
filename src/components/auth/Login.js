import React, { Component } from "react";
import axios from "axios";
import "./style.css";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errorLogin: ""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.onSubmitLogin = this.onSubmitLogin.bind(this);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onSubmitLogin(event) {
    event.preventDefault();
    const body = {
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("http://localhost:8000/api/user/signup", {
        body
      })
      .then(response => {
        console.log(response);
        if (!response.token) {
          this.setState({
            errorLogin: "Unable to Login at this time"
          });
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({
          errorLogin: error
        });
      });
  }
  render() {
    return (
      <div>
        <form className="form-group" onSubmit={this.onSubmitLogin}>
          <div className="imgcontainer"></div>
          <div className="container">
            <label for="email">
              <b>Email</b>
            </label>
            <input
              type="text"
              required
              onChange={this.onFieldChange}
              placeholder="Enter Your Email"
              name="email"
            />

            <label for="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Your Password"
              required
            />
            <button type="submit">Login</button>
            <label>
              <input type="checkbox" checked="checked" name="remember" />
              Remember Me
            </label>
          </div>
          <div className="container">
            <button type="button" className="cancelbtn">
              Cancel
            </button>
          </div>
          <span className="rpw">
            <a href="#forgotpassword">Forgot Password</a>
          </span>
        </form>
        <div className="danger">{this.state.errorLogin}</div>
      </div>
    );
  }
}

export default Login;
