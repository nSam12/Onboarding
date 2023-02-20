import {
    AddTaskAction,
    SetStageCompleteAction,
    SetTaskCompleteAction,
    StageNames,
    Stages,
    StagesAction,
    StagesActionTypes,
    StageTask,
    UnlockStageAction,
} from "./StagesReducerTypes";

const initialState: Stages = {
    forming: {
        isLocked: true,
        complete: 0,
        tasks: [
            { name: "fff", description: "bla-bla-bla", complete: 10 },
            { name: "fff", description: "bla-bla-bla", complete: 10 },
            { name: "fff", description: "bla-bla-bla", complete: 10 },
        ],
    },
    storming: {
        isLocked: true,
        complete: 0,
        tasks: [
            { name: "dsff", description: "bla-bla-bla", complete: 10 },
            { name: "ffff", description: "bla-bla-bla", complete: 10 },
            { name: "tttt", description: "bla-bla-bla", complete: 10 },
        ],
    },
    norming: {},
    performing: {},
};

export const StagesReducer = (
    state: Stages = initialState,
    action: StagesAction
): Stages => {
    switch (action.type) {
        case StagesActionTypes.ADDTASK:
            return addTaskCase(state, action);
        case StagesActionTypes.SETTASKCOMLETE:
            return setTaskCompleteCase(state, action);
        case StagesActionTypes.UNLOCKSTAGE:
            return unlockStageCase(state, action);
        case StagesActionTypes.SETSTAGECOMPLETE:
            return SetStageCompleteCase(state, action);
        default:
            return state;
    }
};

const SetStageCompleteCase = (
    state: Stages,
    action: SetStageCompleteAction
): Stages => {
    if (action.payload.stage === StageNames.FORMING) {
        return {
            ...state,
            forming: { ...state.forming, complete: action.payload.complete },
        };
    } else if (action.payload.stage === StageNames.STORMING) {
        return {
            ...state,
            storming: { ...state.storming, complete: action.payload.complete },
        };
    } else {
        return state;
    }
};

const unlockStageCase = (state: Stages, action: UnlockStageAction): Stages => {
    if (action.payload.stage === StageNames.FORMING) {
        return { ...state, forming: { ...state.forming, isLocked: false } };
    } else if (action.payload.stage === StageNames.STORMING) {
        return { ...state, storming: { ...state.storming, isLocked: false } };
    } else {
        return state;
    }
};

const addTaskCase = (state: Stages, action: AddTaskAction): Stages => {
    if (action.payload.stagename === StageNames.FORMING) {
        return {
            ...state,
            forming: {
                ...state.forming,
                tasks: [...state.forming.tasks, action.payload.task],
            },
        };
    } else if (action.payload.stagename === StageNames.STORMING) {
        return {
            ...state,
            storming: {
                ...state.storming,
                tasks: [...state.storming.tasks, action.payload.task],
            },
        };
    } else {
        return state;
    }
};

const setTaskCompleteCase = (
    state: Stages,
    action: SetTaskCompleteAction
): Stages => {
    const tmptask: StageTask | undefined = state.forming.tasks.find(
        (elem) => elem.name === action.payload.taskName
    );
    if (tmptask === undefined) {
        return state;
    }

    if (action.payload.stageName === StageNames.FORMING) {
        return {
            ...state,
            forming: {
                ...state.forming,
                tasks: [
                    ...state.forming.tasks.filter(
                        (elem: StageTask) =>
                            elem.name === action.payload.taskName
                    ),

                    {
                        ...tmptask,
                        complete: action.payload.complete,
                    },
                ],
            },
        };
    } else if (action.payload.stageName === StageNames.STORMING) {
        return {
            ...state,
            storming: {
                ...state.storming,
                tasks: [
                    ...state.storming.tasks.filter(
                        (elem: StageTask) =>
                            elem.name === action.payload.taskName
                    ),

                    {
                        ...tmptask,
                        complete: action.payload.complete,
                    },
                ],
            },
        };
    } else {
        return state;
    }
};
