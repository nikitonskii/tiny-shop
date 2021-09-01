import { AuthStateType } from "../../types/statesInterfaces";

export const initialState: AuthStateType = {
  token: false,
  isLoaded: false,
  error: null,
  userName: null,
  password: null,
  email: null,
};
