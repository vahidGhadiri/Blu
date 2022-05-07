import {RootReducer} from "./index.reducer";
import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {RootSaga} from "./index.saga";

// @ts-ignore
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(RootReducer, enhancer(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(RootSaga)