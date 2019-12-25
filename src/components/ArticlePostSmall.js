import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Comments from "./Comment";
import Notification from "./Notification";
import { commentPost } from "../store/actions/articleAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

class ArticlePostSmall extends Component {
  state = {
    commentIsHidden: false,
    isVisible: false
  };
  toggleCommentContainer = () => {
    this.setState({
      commentIsHidden: !this.state.commentIsHidden
    });
  };
  handlecommentPost = (event, id, comment) => {
    event.preventDefault();
    this.props.commentPost(id, comment);
    this.setState({
      isVisible: !this.state.isVisible
    });
    setTimeout(() => {
      this.setState({
        isVisible: !this.state.isVisible
      });
    }, 300);
  };
  render() {
    let commentState = "none";
    let articleState = "none";
    if (this.state.commentIsHidden) {
      commentState = "block";
    }
    const { id, title, article, authorId } = this.props;
    let smallArticle = article;
    if (smallArticle.length > 320) {
      articleState = "block";
      smallArticle = article.split("", 320).join();
    }
    return (
      <div>
        <Link to={`dashboard/article/${id}`} className="post-title">
          <p className="bold large">{title}</p>
        </Link>
        <div className="post-content">
          <p>{smallArticle}</p>
          <Link
            to={`dashboard/article/${id}`}
            style={{ display: articleState }}
            className="readmore-link"
          >
            ...Readmore
          </Link>
          <div className="post-tools">
            <div className="row">
              <div className="col-xs-6">
                <p className="x-s post-author">By {authorId}</p>
              </div>
              <div className="col-xs-6">
                <FontAwesomeIcon
                  className="float-right f-icon"
                  icon={faComment}
                  onClick={this.toggleCommentContainer}
                />
              </div>
            </div>
          </div>
          <Comments
            postId={id}
            commentState={commentState}
            handleCommentPost={this.handleCommentPost}
          />
          <Notification
            isVisible={this.state.isVisible}
            notification={this.props.notification}
          />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    notification: this.article.notification
  };
};

const mapDispatchToProps = dispatch => {
  return {
    commentPost: (id, comment) => dispatch(commentPost(id, comment))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ArticlePostSmall);
