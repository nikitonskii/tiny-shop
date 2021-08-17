import * as actionTypes from '../actionTypes/authActionTypes';

export const getAuthToken = (
  email: string,
  password: string
): actionTypes.AuthAction => {
  return {
    type: actionTypes.AUTH_REQUEST,
    isLoaded: true,
    email,
    password,
  }
}