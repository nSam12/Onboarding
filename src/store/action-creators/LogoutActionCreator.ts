import {
    AuthActionTypes,
    AuthToServerTypes,
    LogoutAction,
} from "../reducers/AuthReducer/AuthReducerTypes";

export const LogoutActionCreator = (): LogoutAction => {
    return { type: AuthActionTypes.LOGOUT_ACTION };
};

export const LogoutToServerActionCreator = () => {
    return { type: AuthToServerTypes.LOGOUT_TO_SERVER_ACTION };
};
