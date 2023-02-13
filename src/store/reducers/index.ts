import { combineReducers } from "@reduxjs/toolkit";
import { AuthReducer } from "./AuthReducer/AuthReducer";

export const rootReducer = combineReducers({
    auth: AuthReducer,
});

export type RootState = ReturnType<typeof rootReducer>;