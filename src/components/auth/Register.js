import React, { Component, Fragment } from 'react';

class Register extends Component {
    
    onFildChange(e){
        e.preventDefault();
    }
    onRegisterSubmit(e){
      e.preventDefault();
    }
    render() {
        return (
        <Fragment>
            <h1 className="large text-primary">Signup</h1>
            <p className="lead">
                <i className="fas fa-user">Create Your Account</i>
            </p>
            <form className="form" onSubmit={this.onRegisterSubmit} >
                <div>
                    <label for="email">
                      Email Address  
                    </label>
                    <input type="text" 
                      onChange={ this.onFildChange}
                      className="form-control"
                      name="email"
                      placeholder="Email Address"
                      required />
                </div>
                <div>
                    <label for="password">
                     Password  
                    </label>
                    <input type="text" 
                      onChange={this.onFildChange}
                      className="form-control"
                      name="password"
                      placeholder="Enter Password"
                      required />
                </div>
                <div>
                    <label for="first Name">
                      First Name  
                    </label>
                    <input type="text" 
                      onChange={ this.onFildChange}
                      className="form-control"
                      name="firstName"
                      placeholder="Enter FirstName"
                      required />
                </div>
                <div>
                    <label for="LastName">
                      Last Name  
                    </label>
                    <input type="text" 
                      onChange={ this.onFildChange}
                      className="form-control"
                      name="LastName"
                      placeholder="Enter LastName"
                      required />
                </div>
                <div>
                    <label for="gender">
                     Gender 
                    </label>
                    <input type="text" 
                      onChange={ this.onFildChange}
                      className="form-control"
                      name="Gender"
                      required /> 
                </div>
                <div>
                    <label for="job Role">
                    Job Role  
                    </label>
                    <input type="text" 
                      onChange={ this.onFildChange}
                      className="form-control"
                      name="department"
                      required /> 
                </div>
                <div>
                    <label for="Department">
                      Department 
                    </label>
                    <input type="text" 
                      onChange={ this.onFildChange}
                      className="form-control"
                      name="department"
                      required /> 
                </div>
                <div>
                    <label for="Avater URL">
                      Avater URL  
                    </label>
                    <input type="text" 
                      onChange={ this.onFildChange}
                      className="form-control"
                      name="avater_url"
                      placeholder="Avater URL"
                      required />
                </div>
                <div>
                    <label for="Address">
                         Address  
                    </label>
                    <input type="text" 
                      onChange={ this.onFildChange}
                      className="form-control"
                      name="address"
                      placeholder="Home Address"
                      required />
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