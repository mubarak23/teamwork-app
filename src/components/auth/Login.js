import React, { Component } from 'react';
import './style.css'
class Login extends Component {

    render() {
        return (
          <div>
            <form>
                <div className="imgcontainer">
                   
                </div>
                <div className="container">
                    <label for="email">
                        <b>Email</b>
                    </label>
                    <input type="text"
                    required
                    placeholder="Enter Your Email" name="email" />
                
                    <label for="password">
                        <b>Password</b>
                    </label>
                    <input type="password" 
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
                    <button type="button" className="cancelbtn">Cancel</button>
                </div>
                <span className="rpw">
                    <a href="#forgotpassword">Forgot Password</a>
                </span>  
            </form>  
          </div>      
        );
    }
}

export default Login;   