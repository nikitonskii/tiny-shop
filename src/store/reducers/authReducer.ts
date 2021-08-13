import * as actionTypes from '../actionTypes/authActionTypes';

const initialState: actionTypes.AuthStateType = {
  token: null,
  isLoaded: false,
  error: null,
} 

export const authReducer = (
  state: actionTypes.AuthStateType = initialState,
  action: actionTypes.AuthAction
): actionTypes.AuthStateType => {
  switch(action.type) {
    case actionTypes.AUTH_REQUEST:
      return {
        ...state
      }
    case actionTypes.AUTH_REQUEST_SUCCESS:
      return {
        ...state,
        token: action.token,
        isLoaded: true,
      }
    case actionTypes.AUTH_REQUEST_FAIL:
      return {
        ...state,
        error: action.error,
        isLoaded: false
      }
    default:
      return state
  }
}