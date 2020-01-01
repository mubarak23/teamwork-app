import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { createGif } from "../store/actions/gifActions";
import Notification from "../components/Notification";
class PostGif extends Component {
  state = {
    title: "",
    imageFile: "",
    isVisible: false
  };
  handleOnsubmit = event => {
    event.preventDefault();
    this.props.createGif(this.state);
    this.setState({
      isVisible: !this.state.isVisible
    });
    setTimeout(() => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }, 3500);
    this.setState({
      title: "",
      imageFile: ""
    });
    this.props.history.push("/dashboard");
  };

  onFiledChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleImageChange = event => {
    let reader = new FileReader();
    reader.readAsDataURL(event.target.file[0]);
    reader.onload = e => {
      this.setState({
        imageFile: event.target.result
      });
    };
  };
  render() {
    return <div>Post gif</div>;
  }
}

export default PostGif;
