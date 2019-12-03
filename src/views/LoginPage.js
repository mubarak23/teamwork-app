import React, { Component } from "react";
import { Link } from "react-router-dom";
import { login } from "../store/actions/authActions";
import { connect } from "react-redux";
import "../styles/forms.css";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isVisible: ""
    };
  }
  onLoginSubmit = event => {
    event.preventDefault();
    this.props.login(this.state);
    this.setState({
      isVisible: !this.state.isVisible
    });
    setTimeout(() => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }, 4000);
  };
  onFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div className="container login-container">
        <div className="form">
          <h4 className="text-center">Login</h4>
          <form onSubmit={this.onLoginSubmit}>
            <div className="form-group">
              <p>Email Address:</p>
              <input
                type="text"
                className="form-input"
                name="email"
                placeholder="Email Address"
                value={this.state.email}
                onChange={this.onFieldChange}
                autoFocus
              />
            </div>
            <div className="form-group">
              <p>Password:</p>
              <input
                type="password"
                className="form-input"
                name="password"
                value={this.state.password}
                onChange={this.handleTextChange}
              />
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-xs-12 col-sm-6">
                  <Link to="/register">Do not have an account?</Link>
                </div>
                <div className="col-xs-12 col-sm-6">
                  <button
                    type="submit"
                    className="btn btn-primary float-md-right"
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => {
  return {
    auth: state.auth.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  };
};

export default LoginPage;
