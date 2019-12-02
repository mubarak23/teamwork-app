import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      email: "",
      jobrole: "",
      department: ""
    };
  }

  //store userId and token in localstorage
  render() {
    return (
      <div>
        <h2>Dashboard</h2>
        <div className="col-md-6 com-sm-12">
          <p>Profile Details</p>
          <p>Name: {this.state.name}</p>
          <p>email: {this.state.email}</p>
          <p>Job Role:{this.state.jobrole}</p>
          <p>Department: {this.state.department}</p>
        </div>
        <div className="col-md-6 col-sm-12">
          <p>We will show the list of created article by the user here</p>
          <p></p>
        </div>
      </div>
    );
  }
}

export default Dashboard;
