import {RootReducer} from "./index.reducer";
import {applyMiddleware, compose, createStore} from "redux";
import createSagaMiddleware from "redux-saga";
import {RootSaga} from "./index.saga";

/**
 * Running redux-devtools composer
 */
// @ts-ignore
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

/**
 *Create store and also apply all middlewares
 */
export const store = createStore(RootReducer, enhancer(applyMiddleware(sagaMiddleware)))

//Run redux-saga middleware and apply all forked sagas that has been created
sagaMiddleware.run(RootSaga)