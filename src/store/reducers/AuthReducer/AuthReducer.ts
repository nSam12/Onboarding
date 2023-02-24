import { AuthAction, AuthActionTypes, AuthState } from "./AuthReducerTypes";

const initialState: AuthState = {
    isAuth: false,
    user: {email:"initil", id:"inital", name:"initial"}
};

export const AuthReducer = (
    state: AuthState = initialState,
    action: AuthAction
): AuthState => {
    console.log("reducer Auth", action.type);
    switch (action.type) {
        case AuthActionTypes.LOGIN_ACTION:
            return {...state,  isAuth:true, user:action.payload};
        case AuthActionTypes.LOGOUT_ACTION:
            return initialState;
        default:
            return state;
    }
};
