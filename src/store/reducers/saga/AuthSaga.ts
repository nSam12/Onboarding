import { AuthResponse, IUser } from "../../../services/AuthResponse";
import AuthService from "../../../services/AuthService";
import {
    AuthActionTypes,
    AuthInfo,
    AuthToServerTypes,
    LoginToServerAction,
} from "../AuthReducer/AuthReducerTypes";
import { put, takeEvery, call, takeLatest } from "@redux-saga/core/effects";
import axios, { AxiosResponse } from "axios";
import { LoginActionCreator } from "../../action-creators/LoginActionCreator";
import { LogoutActionCreator } from "../../action-creators/LogoutActionCreator";
import { API_URL } from "../../../http";

const getData = async (
    action: AuthInfo
): Promise<AxiosResponse<AuthResponse>> => {
    return AuthService.login(action.login, action.password);
};

const getUserData = async (): Promise<IUser> => {
    return (await AuthService.getUser()).data;
};

const getDataCheck = async (): Promise<AxiosResponse<AuthResponse>> => {
    console.log("data check function");
    return await axios.get<AuthResponse>(`${API_URL}/refresh`, {
        withCredentials: true,
    });
};

const logout = async (): Promise<void> => {
    return await AuthService.logout();
};

export function* loginWorker(action: LoginToServerAction) {
    try {
        const datafromserver: AxiosResponse<AuthResponse> = yield call(() =>
            getData(action.payload)
        );
        yield console.log("adress", datafromserver);
        //const user: IUser = yield {name: "", id:"", email:"" }//datafromserver.data.user;
        const user: IUser = yield call(() => getUserData());
        yield localStorage.setItem("token", datafromserver.data.accessToken);
        yield console.log("setuser", user);
        yield put(LoginActionCreator(user));

        yield console.log("login function end");
    } catch (e: any) {
        yield console.log(e.response?.data?.message);
    }
}

export function* logoutWorker() {
    try {
        yield console.log("logout worker");
        yield localStorage.removeItem("token");
        yield console.log("Logout action in saga");
        yield put(LogoutActionCreator());
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
}

export function* checkAuthWorker() {
    try {
        yield console.log("IN CHECH AUTH SAGA")
        const response:AuthResponse = yield call (()=>{axios.get<AuthResponse>(`${API_URL}/refresh`, {withCredentials: true,
        })});
        yield console.log("from refresh checkAuth", response);
        const user: IUser = yield call(() => getUserData());
        yield put(LoginActionCreator(user))
        localStorage.setItem("token", response.accessToken);
    } catch (e: any) {
        console.log(e.response?.data?.message);
    }
}

export function* authWatcher() {
    yield takeEvery(AuthToServerTypes.LOGIN_TO_SERVER_ACTION, loginWorker);
    yield takeEvery(AuthToServerTypes.LOGOUT_TO_SERVER_ACTION, logoutWorker);
    yield takeEvery(
        AuthToServerTypes.CHECK_AUTH_TO_SERVER_ACTION,
        checkAuthWorker
    );
}
