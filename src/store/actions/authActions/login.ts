import * as actionTypes from "../../actionTypes/authActionTypes";
import * as authInterfaces from "../../types/authInterfaces";

// auth logout actions
export const signIn = (): authInterfaces.AuthLoginType => ({
  type: actionTypes.AUTH_LOGIN,
  token: true,
});
