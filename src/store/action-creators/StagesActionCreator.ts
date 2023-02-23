import {
    AddTaskAction,
    SetStageCompleteAction,
    SetTaskCompleteAction,
    StageNames,
    StagesActionTypes,
    StageTask,
    UnlockStageAction,
} from "../reducers/StagesReducer/StagesReducerTypes";

export const addTasckActionCreator = (
    stagename: StageNames,
    task: StageTask
): AddTaskAction => {
    return { type: StagesActionTypes.ADDTASK, payload: { task, stagename } };
};

export const SetTaskCompleteActionCreator = (
    stageName: StageNames,
    taskName: string,
    complete: number
): SetTaskCompleteAction => {
    return {
        type: StagesActionTypes.SETTASKCOMLETE,
        payload: { stageName, taskName, complete },
    };
};

export const UnlockStageActionCreator = (
    stage: StageNames
): UnlockStageAction => {
    return { type: StagesActionTypes.UNLOCKSTAGE, payload: { stage } };
};

export const SetStageCompleteActionCreator = (
    stage: StageNames,
    complete: number
): SetStageCompleteAction => {
    return {
        type: StagesActionTypes.SETSTAGECOMPLETE,
        payload: { stage, complete },
    };
};
