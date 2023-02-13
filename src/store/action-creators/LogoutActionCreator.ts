import { AuthAction, AuthActionTypes, LoginAction, LogoutAction } from "../reducers/AuthReducer/AuthReducerTypes";

export const LogoutActionCreator = ():LogoutAction => {
    return { type: AuthActionTypes.LOGOUT_ACTION };
};
