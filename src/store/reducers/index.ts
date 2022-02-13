import { combineReducers } from "redux";
import { store } from "../store";
import gifsReducer from "./reducers";



export const rootReducer = combineReducers({
    gifsReducer
})


export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof store>
export type AppDispatch = AppStore['dispatch']