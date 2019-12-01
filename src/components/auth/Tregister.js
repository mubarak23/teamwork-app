import React, { Component } from "react";
import "./register.css";
//import "../../img/"
class Tregister extends Component {
  render() {
    return (
      <div className="main">
        <section className="signup">
          <img src="../../img/signup-bg.jpg" alt=""></img>

          <div className="container">
            <div className="signup-content">
              <form method="POST" id="signup-form" className="signup-form">
                <h2 className="form-title">Create account</h2>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    className="form-input"
                    name="password"
                    id="password"
                    placeholder="Password"
                  />
                  <span
                    toggle="#password"
                    className="zmdi zmdi-eye field-icon toggle-password"
                  ></span>
                </div>
                <div class="form-group">
                  <input
                    type="password"
                    className="form-input"
                    name="re_password"
                    id="re_password"
                    placeholder="Repeat your password"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="checkbox"
                    name="agree-term"
                    id="agree-term"
                    className="agree-term"
                  />
                  <label for="agree-term" class="label-agree-term">
                    <span>
                      <span></span>
                    </span>
                    I agree all statements in{" "}
                    <a href="#" class="term-service">
                      Terms of service
                    </a>
                  </label>
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    name="submit"
                    id="submit"
                    className="form-submit"
                    value="Sign up"
                  />
                </div>
              </form>
              <p class="loginhere">
                Have already an account ?{" "}
                <a href="#" class="loginhere-link">
                  Login here
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Tregister;
