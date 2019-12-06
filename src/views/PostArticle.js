import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Notification from "../components/Notification";

class PostArticle extends Component {
  state = {
    title: "",
    body: "",
    userId: "",
    isVisible: false
  };
  onCreatePost = event => {
    event.preventDefault();
  };

  onFieldChange = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="feed-container">
        <Notification
          isVisible={this.state.isVisible}
          notification={this.props.notification}
        />
        <h4>Create a Post</h4>
        <form onSubmit={this.onCreatePost}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-input"
              name="title"
              required
              autoFocus
              onChange={this.onFieldChange}
              placeholder="Post Title Here"
            />
          </div>
          <div>
            <label>Post Content</label>
            <textarea
              className="form-input"
              name="body"
              onChange={this.onFieldChange}
              autoFocus
              required
            ></textarea>
          </div>
          <div className="form-group">
            <div className="row">
              <div className="col-xs-12">
                <button
                  type="submit"
                  className="btn btn-primary float-md-right"
                  Create
                  Post
                ></button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default PostArticle;
