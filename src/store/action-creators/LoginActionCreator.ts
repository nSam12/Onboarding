import {
    AuthAction,
    AuthActionTypes,
    LoginAction,
} from "../reducers/AuthReducer/AuthReducerTypes";

export const LoginActionCreator = (
    login: string,
    password: string
): LoginAction => {
    return { type: AuthActionTypes.LOGIN_ACTION, payload: { login, password } };
};
