import { IUser } from "../../services/AuthResponse";
import {
    AuthAction,
    AuthActionTypes,
    LoginAction,
} from "../reducers/AuthReducer/AuthReducerTypes";

export const LoginActionCreator = (user: IUser): LoginAction => {
    return { type: AuthActionTypes.LOGIN_ACTION, payload: user };
};
