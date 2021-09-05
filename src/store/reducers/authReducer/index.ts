import * as actionTypes from "../../actionTypes/authActionTypes";
import * as authInterfaces from "../../types/authInterfaces";
import { AuthStateType } from "../../types/statesInterfaces";

import { initialState } from "./initialState";

export const authReducer = (
  state: AuthStateType = initialState,
  action:
    | authInterfaces.AuthRegistrationRequestType
    | authInterfaces.AuthRequestFailType
    | authInterfaces.AuthRequestSuccessType
    | authInterfaces.AuthRequestType
    | authInterfaces.LogoutRequestFailType
    | authInterfaces.LogoutRequestPendingType
    | authInterfaces.LogoutRequestSuccessType
    | authInterfaces.AuthLoginType,
): AuthStateType => {
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
    case actionTypes.LOGOUT_SUCCESS:
      return {
        token: null,
        isLoaded: false,
        error: null,
        userName: null,
        password: null,
        email: null,
      };
    case actionTypes.LOGOUT_PENDING:
      return {
        ...state,
      };
    case actionTypes.LOGOUT_FAIL:
      return {
        ...state,
      };
    case actionTypes.AUTH_LOGIN:
      return {
        ...state,
        token: true,
      };
    default:
      return state;
  }
};
