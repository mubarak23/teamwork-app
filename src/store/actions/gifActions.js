const api = "http://localhost:8000/api/";
const path = "gif";

export const createGif = data => {
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
            if (res.status === "error") {
              dispatch({ type: "CREATE__GIF_FAILED", data: res });
            } else {
              dispatch({ type: "CREATE_GIF_SUCCESS", data: res });
            }
          })
          .catch(err => {
            dispatch({ type: "CREATE_GIF_FAILED", data: err });
          });
      })
      .catch(err => {
        dispatch({ type: "CREATE_GIF_FAILED", data: err });
      });
  };
};
