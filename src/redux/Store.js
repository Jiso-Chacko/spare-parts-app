import { applyMiddleware, createStore, compose  } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./reducers/RootReducer";

const initialState = {};
const middlewares =  [thunk];

export const Store = createStore(
    RootReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
);
