import { Axios, AxiosResponse } from "axios";
import $api from "../http";


export default class StagesDataService{
    static async getFormingStage(): Promise<AxiosResponse<FormStage>>{
        return $api.get<FormStage>('/formstage');
    }
}

export interface FormStage{
    isLock: boolean,
    complite: number,
}
