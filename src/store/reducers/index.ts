import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthReducer/AuthReducer";
import { StagesReducer } from "./StagesReducer/StagesReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer,
    stages: StagesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;