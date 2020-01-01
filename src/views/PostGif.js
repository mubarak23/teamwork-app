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
    const { auth } = this.props;
    if (!auth.token) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <div>
        <div className="feed-container">
          <Notification
            isVisible={this.state.isVisible}
            notification={this.props.notification}
          />
          <div className="">
            <h5>Post a Gif</h5>
            <form onSubmit={this.handleSubmit} encType="multipart/form-data">
              <div className="form-group">
                <p>Title:</p>
                <input
                  type="text"
                  className="form-input"
                  id="title"
                  placeholder="Hello World..."
                  value={this.state.title}
                  onChange={this.handleTextChange}
                  autoFocus
                />
              </div>
              <div className="form-group">
                <p>Image:</p>
                <input
                  id="imageFile"
                  type="file"
                  onChange={this.handleImageChange}
                />
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col-xs-12">
                    <button
                      type="submit"
                      className="btn btn-primary float-md-right"
                    >
                      Post article
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notification: state.gif.notification,
    auth: state.auth.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createGif: data => dispatch(createGif(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostGif);
