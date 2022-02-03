import { combineReducers } from "redux";
import { gifsReducers } from "./reducers";



export const rootReducer = combineReducers({
    data: gifsReducers
})


export type RootState = ReturnType<typeof rootReducer>