import { Person } from "../../../Types/PeopleTypes";

export interface Stages{
    forming: Stage;
    storming: Stage;
    norming: NormingData;
    performing: PerformingData;

}

export interface Forming{

}

export interface NormingData{

}

export interface PerformingData{

}

export interface Stage{
    isLocked: boolean;
    complete: number;
    tasks: StageTask[];
}

export interface Module{
    isLocked: boolean;
    complete: number;
}

export interface StageTask{
    name: string;
    description: string;
    complete: number;
    author?: Person;
    date?: Date;
    longDescription?: string;
    deadline?: Date;
}

export enum StageNames{
    FORMING = "FORMING",
    STORMING = "STORMING",
}

export enum StagesActionTypes{
    ADDTASK = "ADDTASK",
    SETTASKCOMLETE = "SETTASKCOMLETE",  

    UNLOCKSTAGE = "UNLOCKSTAGE",
    SETSTAGECOMPLETE = "SETSTAGECOMPLETE",
}

export interface AddTaskAction{
    type:StagesActionTypes.ADDTASK;
    payload: {task: StageTask, stagename: StageNames}
}

export interface SetTaskCompleteAction{
    type: StagesActionTypes.SETTASKCOMLETE
    payload: {stageName: StageNames, taskName: string, complete: number}
}

export interface UnlockStageAction{
    type: StagesActionTypes.UNLOCKSTAGE,
    payload: {stage: StageNames}
}

export interface SetStageCompleteAction{
    type: StagesActionTypes.SETSTAGECOMPLETE
    payload: {stage: StageNames, complete: number}
}

export type StagesAction = AddTaskAction | SetTaskCompleteAction | UnlockStageAction |SetStageCompleteAction;