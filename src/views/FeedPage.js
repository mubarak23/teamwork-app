import React, { Component } from "react";
import { getFeed } from '../store/actions/feedActions';
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
        <h3>List of post and gif</h3>
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
