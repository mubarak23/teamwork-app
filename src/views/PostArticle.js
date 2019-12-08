import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createArticle } from "../store/actions/articleAction";
import Notification from "../components/Notification";

class CreatePost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      userId: "",
      isVisible: false
    };
  }
  onCreatePost = event => {
    event.preventDefault();
    this.props.createPost(this.state);
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
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    //const { auth } = this.props;
    //if (!auth.token) {
    //return <Redirect to="dashboard" />;
    //}
    return (
      <div className="feed-container">
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
                <input
                  type="submit"
                  value="Create Post"
                  className="btn btn-primary right"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    //notification: state.body,
    auth: state.auth.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createPost: data => dispatch(createArticle(data))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CreatePost);
