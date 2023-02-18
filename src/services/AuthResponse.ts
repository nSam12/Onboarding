export interface AuthResponse{
    accessToken: string;
    refreshToken: string;
}

export interface IUser{
    email: string;
    id: string;
    name: string;
}