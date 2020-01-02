const initState = {
  notification: {
    status: null,
    message: null
  },
  post: {
    comments: null
  }
};

const gifReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_GIF_SUCCESS":
      return {
        ...state,
        notification: {
          status: action.data.status,
          message: action.data.data.message
        }
      };
    case "CREATE_GIF_FAILED":
      return {
        ...state,
        notification: {
          status: action.data.status,
          message: action.data.data.message
        }
      };
    case "GET_GIF_SUCESS":
      return {
        ...state,
        post: action.data.data
      };
    case "GET_GIF_FAILED":
      return {
        ...state
      };
    case "COMMENT_GIF_SUCCESS":
      return {
        ...state,
        notification: {
          status: "success",
          message: "Comment posted Successfully"
        }
      };
    case "COMMENT_GIF_FAILED":
      return {
        ...state,
        notification: {
          status: "error",
          message: "Unabled to post comment at this time"
        }
      };
    default:
      return state;
  }
};

export default gifReducer;
