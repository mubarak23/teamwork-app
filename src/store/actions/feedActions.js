//import { response } from "express";

export const api = "http://localhost:8000/api/";
const path = "articles";

export const getFeed = () => {
  return (dispatch, getState) => {
    const request = new Request(`${api + path}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`
      })
    });
    fetch(request)
      .then(response => {
        response
          .json()
          .then(res => {
            if (res.status === "err") {
              dispatch({ type: "GET_FEED_FAILED", data: res });
            } else {
              dispatch({ type: "GET_FEED_SUCCESS", data: res });
            }
          })
          .catch(err => {
            dispatch({ type: "GET_FEED_FAILED", data: err });
          });
      })
      .catch(err => {
        dispatch({ type: "GET_FEED_FAILED", data: err });
      });
  };
};
