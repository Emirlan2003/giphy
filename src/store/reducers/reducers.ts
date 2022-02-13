import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IGifs, IInit, ISearch, ICategory } from "../../types"
import { getCategory } from "../action-creators/action-creators"



export const initialState: IInit = {
     gifs: [],
     details: [],
     search: [],
     category: [],
     random: {},
     error: ''
}


export const gifsSlice = createSlice({
    name: 'gifs',
    initialState,
    reducers: {
        getGifsSuccess(state, action: PayloadAction<IGifs[]>){
            state.gifs = action.payload
        },
        getGifsError(state, action: PayloadAction<string | null>){
            state.error = action.payload
        },
        getSearch(state, action: PayloadAction<ISearch[]>){
            state.search = action.payload
        },
        getSearchError(state, action: PayloadAction<string>){
            state.error = action.payload
        },
        getCategorySuccess(state, action: PayloadAction<ICategory[]>){
            state.category = action.payload
        },
        getCategoryError(state, action: PayloadAction<string>){
            state.error = action.payload
        }
    }
})

export default gifsSlice.reducer
