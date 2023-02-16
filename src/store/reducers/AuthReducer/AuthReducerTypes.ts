import { IUser } from "../../../services/AuthResponse";

export interface AuthState{
    isAuth: boolean
    user: IUser;
}

export interface AuthInfo{
    password:string;
    login: string;
}

export enum AuthActionTypes{
    LOGIN_ACTION = "LOGIN_ACTION",
    LOGOUT_ACTION = "LOGOUT_ACTION",
}

export enum AuthToServerTypes{
    LOGIN_TO_SERVER_ACTION = "LOGIN_TO_SERVER_ACTION",
    LOGOUT_TO_SERVER_ACTION = "LOGOUT_TO_SERVER_ACTION",
    CHECK_AUTH_TO_SERVER_ACTION = "CHECK_AUTH_TO_SERVER_ACTION"
}

export interface LoginToServerAction{
    type: AuthToServerTypes.LOGIN_TO_SERVER_ACTION,
    payload: AuthInfo,
}

export interface LoginAction {
    type: AuthActionTypes.LOGIN_ACTION
    payload: IUser
}

export interface LogoutAction{
    type: AuthActionTypes.LOGOUT_ACTION
}

export type AuthAction = LoginAction | LogoutAction