import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { login } from "../store/actions/authActions";
import { connect } from "react-redux";
import Notification from "../components/Notification";
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
    console.log(this.state);
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
    const { auth } = this.props;
    if (auth.userId) {
      return <Redirect to="/dashboard/" />;
    }
    return (
      <div className="container ">
        <Notification
          isVisible={this.state.isVisible}
          notification={this.props.notification}
        />
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
                onChange={this.onFieldChange}
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
    notification: state.auth.notification,
    auth: state.auth.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  };
};

export default connect(mapStatetoProps, mapDispatchToProps)(LoginPage);
