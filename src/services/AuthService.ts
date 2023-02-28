import { AxiosResponse } from "axios";
import $api from "../http";
import { AuthResponse, IUser } from "./AuthResponse";


export default class AuthService{
    static async login(email: string, password: string): Promise<AxiosResponse<AuthResponse>>{
        console.log("requerd");
        return $api.post<AuthResponse>('/login', {email, password})
    }

    static async getUser(): Promise<AxiosResponse<IUser>>{
        return $api.get<IUser>('/getuser')
    }

    static async logout(): Promise<void>{
        return $api.post('/logout')
    }
}