import { IUser } from "../../services/AuthResponse";
import {
    AuthActionTypes,
    AuthInfo,
    AuthToServerTypes,
    LoginAction,
} from "../reducers/AuthReducer/AuthReducerTypes";

export const LoginActionCreator = (user: IUser): LoginAction => {
    return { type: AuthActionTypes.LOGIN_ACTION, payload: user };
};

export const LoginToServerActionCreator = (action: AuthInfo) => {
    console.log("SERVER ACTION CREATOR");
    return { type: AuthToServerTypes.LOGIN_TO_SERVER_ACTION, payload: action };
};

export const CheckAuthToServerActionCreator = () => {
    return { type: AuthToServerTypes.CHECK_AUTH_TO_SERVER_ACTION };
};
