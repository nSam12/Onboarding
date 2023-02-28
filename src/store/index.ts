
import { rootReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
//export const basestore = createStore(rootReducer);
import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { authWatcher } from "./reducers/saga/AuthSaga";
import { composeWithDevTools } from "redux-devtools-extension";



export const sagaMiddleware = createSagaMiddleware()

export const basestore = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(authWatcher)