import * as actionTypes from "../../actionTypes/authActionTypes";
import * as authInterfaces from "../../types/authInterfaces";

// set to store user credentials sync
export const setUserCredentials = (
  email: string,
  password: string,
  userName: string,
): authInterfaces.AuthRegistrationRequestType => ({
  type: actionTypes.AUTH_REGISTRATION_REQUEST,
  email,
  password,
  userName,
});
