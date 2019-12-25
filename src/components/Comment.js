import React, { Component } from "react";

class Comment extends Component {
  state = {
    comment: ""
  };
  handleTextChange = event => {
    event.preventdefault();
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    const { commentState, handleCommentPost, postId } = this.props;
    return (
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            handleCommentPost(postId, this.state.comment);
            this.setState({
              comment: ""
            });
          }}
        >
          <textarea
            className="form-input"
            id="comment"
            value={this.state.comment}
            onChange={this.handleTextChange}
            required
          ></textarea>

          <div className="row">
            <div className="col-xs-12">
              <button className="btn btn-primary float-right">Comment</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Comment;
