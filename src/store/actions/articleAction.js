const api = "http://localhost:8000/api/";
const path = "article";

export const createArticle = data => {
  return (dispatch, getState) => {
    const request = new Request(`${api + path}/`, {
      method: "POST",
      body: JSON.stringify(data),
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
            //return console.log(res);
            if (res.status === "error") {
              dispatch({ type: "CREATE_ARTICLE_FAILED", data: res });
            } else {
              dispatch({ type: "CREATE_ARTICLE_SUCCESS", data: res });
            }
          })
          .catch(err => {
            dispatch({ type: "CREATE_ARTICLE_FAILED", data: err });
          });
      })
      .catch(err => {
        dispatch({ type: "CREATE_ARTICLE_FAILED", data: err });
      });
  };
};
