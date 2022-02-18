import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IGifs, IInit, ISearch, ICategory, IFavorites } from "../../types"



export const initialState: IInit = {
     gifs: [],
     details: [],
     search: [],
     category: [],
     favorites: [],
     favlength: [],
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
        },
        getFavoritesSuccess(state, action: PayloadAction<IFavorites[]>){
            state.favorites = action.payload
        },
        getFavoritesError(state, action: PayloadAction<string>){
            state.error = action.payload
        },
        getFavoriteLength(state, action: PayloadAction<any>){
            state.favlength = action.payload
        }
    }
})

export default gifsSlice.reducer
