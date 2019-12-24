import React, { Component } from "react";
import { getFeed } from '../store/actions/feedActions';
import ArticlePostSmall from '../components/ArticlePostSmall';
import { connect } from 'react-redux';

class FeedPage extends Component {
  state = {};
  componentDidMount() {
    this.props.getFeed();
  }
  shouldComponentUpdate(nextProps, nextState) {
    this.props.getFeed();
    return true;
  }
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h3>My Feeds</h3>
        {
          posts.map((post) => {
            if(!post.imageUrl){
              return <ArticlePostSmall
                key={post.id}
                id={post.id}
                title={post.title}
                article={post.article}
                authorId={post.UserId}
                />
            }
          })
        }
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return {
    posts: state.feed.posts,
  }
}
const mapDispatchToProps = (dispatch) =>{
  return {
    getFeed: () => dispatch(getFeed())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedPage);
