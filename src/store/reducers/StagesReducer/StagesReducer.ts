import { Stage } from "./StagesReducerTypes"

const initialState: Stage = {
    name: "",
    isLocked: true,
    complete: 0,
    tasks: []
}

export const StagesReducer = (state: Stage = initialState, action:any):Stage =>{
    return state;
}