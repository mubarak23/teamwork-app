const api = "http://localhost:8000/api/user";

export const login = data => {
  return (dispatch, getState) => {
    const request = new Request(`${api}/login`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    fetch(request)
      .then(response => {
        response
          .json()
          .then(res => {
            if (res.status === "error") {
              dispatch({ type: "LOGIN_FAILED", data: res });
            } else {
              sessionStorage.setItem("userId", res.data.userId);
              sessionStorage.setItem("userToken", res.data.token);
              dispatch({ type: "LOGIN_SUCCESS", data: res });
            }
          })
          .catch(err => {
            dispatch({ type: "LOGIN_FAILED", data: err });
          });
      })
      .catch(err => {
        dispatch({ type: "LOGIN_FAILED", data: err });
      });
  };
};

export const signup = credentials => {
  return (dispatch, getState) => {
    const request = new Request(`${api}/signup`, {
      method: "POST",
      body: JSON.stringify(credentials),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    });
    fetch(request)
      .then(response => {
        response
          .json()
          .then(res => {
            if (res.status === "error") {
              dispatch({ type: "SIGNUP_FAILED", data: res });
            } else {
              dispatch({ type: "SIGNUP_SUCCESS", data: res });
            }
          })
          .catch(err => {
            dispatch({ type: "SIGNUP_FAILED", data: err });
          });
      })
      .catch(err => {
        dispatch({ type: "SIGNUP_FAILED", data: err });
      });
  };
};
