const initState = {
  posts: []
};

const feedReducer = (state = initState, action) => {
  switch (action.type) {
    case "GET_FEED_FAILED":
      return {
        ...state
      };
    case "GET_FEED_SUCCESS":
      return {
        ...state,
        posts: action.data.data
      };
    default:
      return state;
  }
};

export default feedReducer;
