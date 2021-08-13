// AUTH 
export interface AuthStateType {
  token: string | null
  isLoaded: Boolean
  error: string | Error | null
}

export const AUTH_REQUEST = 'AUTH_REQUEST ';
interface GetAuthRequestType {
  type: typeof AUTH_REQUEST
  isLoaded: Boolean
  email: string
  password: string
}

export const AUTH_REQUEST_SUCCESS = 'AUTH_REQUEST_SUCCESS';
interface GetAuthRequestSuccessType {
  type: typeof AUTH_REQUEST_SUCCESS
  token: string
  isLoaded: Boolean
}

export const AUTH_REQUEST_FAIL = 'AUTH_REQUEST_FAIL';
interface GetAuthRequestFailType {
  type: typeof AUTH_REQUEST_FAIL
  error: string | Error
  isLoaded: Boolean
}

export const AUTH_REGISTRATION_REQUEST = 'AUTH_REGISTRATION_REQUEST';
interface AuthRegistrationRequestType {
  type: typeof AUTH_REGISTRATION_REQUEST
  
}

export type AuthAction = 
  | GetAuthRequestType
  | GetAuthRequestSuccessType
  | GetAuthRequestFailType