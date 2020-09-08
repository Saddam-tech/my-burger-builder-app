import * as actionTypes from "./actionTypes";
import axios from "axios";
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};

export const auth = (email, password, isSignUp) => {
  return (dispatch) => {
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC1dtuwGAtOSTPdpYAQpuj4xgBSzn3_E3c'
    if (!isSignUp) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC1dtuwGAtOSTPdpYAQpuj4xgBSzn3_E3c'
    }
    dispatch(authStart());
    axios
      .post(
        url,
        authData
      )
      .then((response) => {
        console.log(response);
        dispatch(authSuccess(response.data.idToken, response.data.localId));
      })
      .catch((err) => {
        console.log(err);
        dispatch(authFail(err));
      });
  };
};
