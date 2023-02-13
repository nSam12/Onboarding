export interface AuthState{
    isAuth: boolean
}

export interface AuthInfo{
    password:string;
    login: string;
}

export enum AuthActionTypes{
    LOGIN_ACTION = "LOGIN_ACTION",
    LOGOUT_ACTION = "LOGOUT_ACTION",
}

export interface LoginAction {
    type: AuthActionTypes.LOGIN_ACTION
    payload: AuthInfo
}

export interface LogoutAction{
    type: AuthActionTypes.LOGOUT_ACTION
}
export type AuthAction = LoginAction | LogoutAction