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
      firstName: "",
      LastName: "",
      address: "",
      gender: "",
      department: "",
      jobrole: ""
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

    const body = {
      email: this.state.email,
      password: this.state.password,
      firstName: this.state.firstName,
      LastName: this.state.LastName,
      jobrole: this.state.jobrole,
      department: this.state.department,
      gender: this.state.gender,
      address: this.state.address
    };
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    axios
      .post("http://localhost:8000/api/user/signup", {
        body,
        config
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
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  onChange={this.onFildChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={this.onFildChange}
                />
              </div>

              <div>
                <label htmlFor="first Name">First Name</label>
                <input
                  type="text"
                  value={this.state.firstName}
                  onChange={this.onFildChange}
                  className="form-control"
                  name="firstName"
                  placeholder="Enter FirstName"
                  required
                />
              </div>
              <div>
                <label htmlFor="LastName">Last Name</label>
                <input
                  type="text"
                  value={this.state.LastName}
                  onChange={this.onFildChange}
                  className="form-control"
                  name="LastName"
                  placeholder="Enter LastName"
                  required
                />
              </div>
              <div>
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  value={this.state.gender}
                  onChange={this.onFildChange}
                  className="form-control"
                  name="gender"
                  required
                />
              </div>
              <div>
                <label htmlFor="job Role">Job Role</label>
                <input
                  type="text"
                  value={this.state.jobrole}
                  onChange={this.onFildChange}
                  className="form-control"
                  name="jobrole"
                  required
                />
              </div>
              <div>
                <label htmlFor="Department">Department</label>
                <input
                  type="text"
                  value={this.state.department}
                  onChange={this.onFildChange}
                  className="form-control"
                  name="department"
                  required
                />
              </div>
              <div>
                <label htmlFor="Address">Address</label>
                <input
                  type="text"
                  value={this.state.address}
                  onChange={this.onFildChange}
                  className="form-control"
                  name="address"
                  placeholder="Home Address"
                  required
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
