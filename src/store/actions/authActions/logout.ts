import * as actionTypes from "../../actionTypes/authActionTypes";
import * as authInterfaces from "../../types/authInterfaces";

// auth logout actions
export const clearAuthStore = (): authInterfaces.LogoutType => ({
  type: actionTypes.LOGOUT,
});

// export const logout = (dispatch: Dispatch<actionTypes.AuthAction>) => {
//   dispatch(clearAuthStore());
//   localStorage.clear();
// };
