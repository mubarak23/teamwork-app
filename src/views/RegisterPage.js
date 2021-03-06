import React, { Component, Fragment } from "react";
import axios from "axios";
import { withRouter, Redirect } from "react-router-dom";
import { signup } from "../store/actions/authActions";
import { connect } from "react-redux";
import Notification from "../components/Notification";
import "../styles/forms.css";

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      gender: "",
      department: "",
      jobRole: "",
      authError: ""
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
      lastName: this.state.lastName,
      jobRole: this.state.jobRole,
      department: this.state.department,
      gender: this.state.gender,
      address: this.state.address
    };
    //return console.log(this.state);
    axios
      .post("http://localhost:8000/api/user/signup", {
        body,
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  }

  onRegisterSubmits = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.signUp(this.state);
    this.setState({
      isVisible: !this.state.isVisible
    });
    setTimeout(() => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }, 4000);
  };
  render() {
    const { authError, auth } = this.props;

    if (auth.userId) {
      return <Redirect to="/dashboard/" />;
    }
    return (
      <Fragment>
        <div className="container">
          <Notification
            isVisible={this.state.isVisible}
            notification={this.props.notification}
          />
          <h1 className=" text-primary">Sign Up</h1>
          <p className="lead">Create Your Account</p>
          <div className="signup-content">
            <form className="form" onSubmit={this.onRegisterSubmits}>
              <div className="form-group">
                <label htmlFor="first Name">Email Address</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="Email Address"
                  name="email"
                  onChange={this.onFildChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="first Name">Password</label>
                <input
                  type="password"
                  className="form-input"
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
                  className="form-input"
                  name="firstName"
                  placeholder="Enter FirstName"
                  required
                />
              </div>
              <div>
                <label htmlFor="first Name">Last Name</label>
                <input
                  type="text"
                  value={this.state.lastName}
                  onChange={this.onFildChange}
                  className="form-input"
                  name="lastName"
                  placeholder="Enter Last Name"
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
                  value={this.state.jobRole}
                  onChange={this.onFildChange}
                  className="form-control"
                  name="jobRole"
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

const mapStateToProps = state => {
  return {
    notification: state.auth.notification,
    auth: state.auth.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: data => dispatch(signup(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
