import { AuthAction, AuthActionTypes, AuthState } from "./AuthReducerTypes";

const initialState: AuthState = {
    isAuth: false,
    user: {email:"", id:"", name:""}
};

export const AuthReducer = (
    state: AuthState = initialState,
    action: AuthAction
): AuthState => {
    switch (action.type) {
        case AuthActionTypes.LOGIN_ACTION:
            return {...state,  isAuth:true, user:action.payload};
        case AuthActionTypes.LOGOUT_ACTION:
            return initialState;
        default:
            return state;
    }
};
