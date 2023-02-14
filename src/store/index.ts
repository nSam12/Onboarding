import { createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

//export const basestore = createStore(rootReducer);
export const basestore = configureStore<any>({reducer:  rootReducer});