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
      jobrole: "",
      gender: "",
      department: "",
      avater_url: "",
      address: ""
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
      firstName: this.state.firstName,
      LastName: this.state.LastName,
      gender: this.state.gender,
      department: this.state.department,
      jobrole: this.state.jobrole,
      avater_url: this.state.avater_url,
      address: this.state.address
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
        <h1 className="large text-primary">Signup</h1>
        <p className="lead">
          <i className="fas fa-user">Create Your Account</i>
        </p>
        <form className="form" onSubmit={this.onRegisterSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              value={this.state.email}
              onChange={this.onFildChange}
              className="form-control"
              name="email"
              placeholder="Email Address"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              value={this.state.password}
              onChange={this.onFildChange}
              className="form-control"
              name="password"
              placeholder="Enter Password"
              required
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
            <label htmlFor="Avater URL">Avater URL</label>
            <input
              type="text"
              value={this.state.avater_url}
              onChange={this.onFildChange}
              className="form-control"
              name="avater_url"
              placeholder="Avater URL"
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
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="">
          Already Have An Account? <a href="#login">Login</a>
        </p>
      </Fragment>
    );
  }
}

export default Register;
