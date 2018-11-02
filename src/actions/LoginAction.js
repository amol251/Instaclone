
import * as types from './actions/actionConstants';

function callLoginApi(email, password, callback) {
  setTimeout(() => {
    if (email === 'admin@example.com' && password === 'admin') {
      return callback(null);
    } else {
      return callback(new Error('Invalid email and password'));
    }
  }, 1000);
}

export function login(email, password) {
  return dispatch => {
    dispatch(setLoginPending(true));
    dispatch(setLoginSuccess(false));
    dispatch(setLoginError(null));

    callLoginApi(email, password, error => {
      dispatch(setLoginPending(false));
      if (!error) {
        dispatch(setLoginSuccess(true));
      } else {
        dispatch(setLoginError(error));
      }
    });
  }
}

function setLoginPending(isLoginPending) {
  return {
    type: types.SET_LOGIN_PENDING,
    isLoginPending
  };
}

function setLoginSuccess(isLoginSuccess) {
  return {
    type: types.SET_LOGIN_SUCCESS,
    isLoginSuccess
  };
}

function setLoginError(loginError) {
  return {
    type: types.SET_LOGIN_ERROR,
    loginError
  }
}
