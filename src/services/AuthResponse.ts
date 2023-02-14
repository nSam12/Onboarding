export interface AuthResponse{
    accessToken: string;
    refreshToken: string;
    user: IUser;
}

export interface IUser{
    email: string;
    id: string;
    name: string;
}