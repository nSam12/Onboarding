
export interface Stage{
    name:string;
    isLocked: boolean;
    complete: number;
    tasks: StageTask[];
}

export interface StageTask{
    name: string;
    description: string;
    complete: number
}

export enum StagesActionTypes{
    ADDTASK = "ADDTASK",
    SETTASKCOMLETE = "SETTASKCOMLETE",  

    ADDSTAGE = "",
    UNLOCKSTAGE = "UNLOCKSTAGE",
    SETSTAGECOMPLETE = "SETSTAGECOMPLETE",
}