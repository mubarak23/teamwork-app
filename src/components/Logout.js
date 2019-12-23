import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Logout extends Component {
  state = {
    navigation: false
  };

  logout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("userId");
    this.setState({ navigation: true });
  };
  render() {
    const { navigation } = this.state;
    if (navigation) {
      return <Redirect to="/Home" push={true} />;
    }
    return (
      <div>
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default Logout;
