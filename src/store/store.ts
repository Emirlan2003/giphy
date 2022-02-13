import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducers";

export const store = () => {
    return configureStore({
        reducer: rootReducer
    })
}