import { AuthStateType } from "../../types/statesInterfaces";

export const initialState: AuthStateType = {
  token: null,
  isLoaded: false,
  error: null,
  userName: null,
  password: null,
  email: null,
};
