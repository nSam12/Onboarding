import { AuthResponse, IUser } from "../../../services/AuthResponse";
import AuthService from "../../../services/AuthService";
import { AuthActionTypes, AuthToServerTypes, LoginToServerAction } from "../AuthReducer/AuthReducerTypes";
import { put, takeEvery, call } from "@redux-saga/core/effects";
import { AxiosResponse } from "axios";

const getData = async ():Promise<AxiosResponse<AuthResponse>> =>{
    return AuthService.login("login", "password");
}

export function* loginWorker(){
    const datafromserver:AxiosResponse<AuthResponse> = yield call(getData);
    const user:IUser = yield datafromserver.data.user;
    yield console.log("from saga", user);
}

export function* logoutWorker(){
    
}

export function* authWatcher(){
    yield takeEvery(AuthToServerTypes.LOGIN_TO_SERVER_ACTION, loginWorker);
}