import { IUser } from "../../services/AuthResponse";
import {
    AuthAction,
    AuthActionTypes,
    AuthToServerTypes,
    LoginAction,
} from "../reducers/AuthReducer/AuthReducerTypes";

export const LoginActionCreator = (user: IUser): LoginAction => {
    return { type: AuthActionTypes.LOGIN_ACTION, payload: user };
};

export const LoginToServerActionCreator = () => {
    console.log("SERVER ACTION CREATOR")
    return {type: AuthToServerTypes.LOGIN_TO_SERVER_ACTION, }
}