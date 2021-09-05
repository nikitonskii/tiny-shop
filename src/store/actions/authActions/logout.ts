import { Dispatch } from "react";

import * as actionTypes from "../../actionTypes/authActionTypes";
import * as authInterfaces from "../../types/authInterfaces";

// auth logout actions
export const logoutActions = {
  setLogoutPending: (): authInterfaces.LogoutRequestPendingType => ({
    type: actionTypes.LOGOUT_PENDING,
  }),

  setLogoutSuccess: (): authInterfaces.LogoutRequestSuccessType => ({
    type: actionTypes.LOGOUT_SUCCESS,
  }),

  setLogoutFail: (): authInterfaces.LogoutRequestFailType => ({
    type: actionTypes.LOGOUT_FAIL,
  }),

  logout: () => {
    return (
      dispatch: Dispatch<
        | authInterfaces.LogoutRequestFailType
        | authInterfaces.LogoutRequestPendingType
        | authInterfaces.LogoutRequestSuccessType
      >,
    ) => {
      dispatch(logoutActions.setLogoutPending());

      return new Promise((resolve, reject) => {
        setTimeout(resolve, 1000, console.log("response resolved !"));
      })
        .then((result) => dispatch(logoutActions.setLogoutSuccess()))
        .catch((error) => dispatch(logoutActions.setLogoutFail()));
    };
  },
};
