export const api = "http://localhost:8000/api/";
const path = "user";
export const login = data => {
  return (dispatch, getState) => {
    const request = new Request(`${api + path}/login`, {
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
            //return console.log(res);
            if (res.status === "error") {
              dispatch({ type: "LOGIN_FAILED", data: res });
            } else {
              localStorage.setItem("userId", res.data.userId);
              localStorage.setItem("userToken", res.data.token);
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

export function isAuthenticated() {
  // Checks if there is a saved token and it's still valid
  const token = localStorage.getItem("userToken");
  console.log(token);
  if (token) {
    return true;
  } else {
    return false;
  }
}
