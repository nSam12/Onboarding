import { AuthAction, AuthActionTypes, AuthState } from "./AuthReducerTypes";

const initialState: AuthState = {
    isAuth: false,
};

export const AuthReducer = (
    state: AuthState,
    action: AuthAction
): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_ACTION:
            return state;
        case AuthActionTypes.LOGOUT_ACTION:
            return state;
        default:
            return state;
    }
};
