import * as actionTypes from "../actionTypes/authActionTypes";

const initialState: actionTypes.AuthStateType = {
  token: null,
  isLoaded: false,
  error: null,
  userName: null,
  password: null,
  email: null,
};

export const authReducer = (
  state: actionTypes.AuthStateType = initialState,
  action: actionTypes.AuthAction,
): actionTypes.AuthStateType => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
      return {
        ...state,
      };
    case actionTypes.AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.token,
        isLoaded: true,
      };
    case actionTypes.AUTH_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
        isLoaded: false,
      };
    case actionTypes.AUTH_REGISTRATION_REQUEST:
      return {
        ...state,
        userName: action.userName,
        password: action.password,
        email: action.email,
      };
    case actionTypes.LOGOUT:
      return {
        token: null,
        isLoaded: false,
        error: null,
        userName: null,
        password: null,
        email: null,
      };
    default:
      return state;
  }
};
