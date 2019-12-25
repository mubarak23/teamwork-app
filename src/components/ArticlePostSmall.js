import React, { Component } from "react";
import { Link } from "react-router-dom";
import Comment from "./Comment";
import Notification from "./Notification";
import { commentPost } from "../store/actions/articleAction";

class ArticlePostSmall extends Component {
  state = {
    commentIsHidden: false,
    isVisible: false
  }
  toggleCommentContainer = () =>{
    this.setState({
      commentIsHidden: !this.state.commentIsHidden
    })
  }
  handlecommentPost = (event, id, comment) =>{
    event.preventDefault();
    this.props.commentPost(id, comment);
    this.setState({
      isVisible: !this.state.isVisible
    })
    setTimeout(() => {
      this.setState({
        isVisible: !this.state.isVisible
      })
    }, 300);
  }
  render() {
    let commentState = 'none';
    let articleState = 'none';
    if(this.state.commentIsHidden){
      commentState = 'block'
    }
    const { id, title, article, authorId } = this.props
    let smallArticle = article;
    if(smallArticle.length > 320){
      articleState = 'block';
      smallArticle = article.split('', 320).join()
    }
    return <div>
      
    </div>;
  }
}

export default ArticlePostSmall;
