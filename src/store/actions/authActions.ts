import { Dispatch } from 'redux';

import * as actionTypes from '../actionTypes/authActionTypes';

export const setUserCredentials = (
  userName: string,
  password: string,
  email: string,
): actionTypes.AuthAction => ({
  type: actionTypes.AUTH_REGISTRATION_REQUEST,
  userName,
  password,
  email
})

export const syncRegistrate = (
  userName: string,
  password: string,
  email: string,
) => {
  return function(dispatch:Dispatch<actionTypes.AuthAction>) {
    dispatch(setUserCredentials(userName,password,email))
  }
};

export const clearAuthStore = (): actionTypes.AuthAction => ({
  type: actionTypes.LOGOUT,
});

export const logout = (dispatch: Dispatch<actionTypes.AuthAction>) => {
  dispatch(clearAuthStore());
  localStorage.clear()
};