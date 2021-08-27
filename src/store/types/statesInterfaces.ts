// AUTH
export interface AuthStateType {
  token?: string | null;
  isLoaded?: Boolean;
  error?: string | Error | null;
  userName: string | null;
  password: string | null;
  email: string | null;
}
