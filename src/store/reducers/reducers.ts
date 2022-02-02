import { combineReducers } from "redux";
import { gifsReducers } from ".";



export const rootReducer = combineReducers({
    data: gifsReducers
})


