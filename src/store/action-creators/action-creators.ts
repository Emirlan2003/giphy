import axios from "axios"
import { KEY_API, REACT_APP_API } from "../../api/api"
import { AppDispatch } from "../reducers"
import { gifsSlice } from "../reducers/reducers"




export const getGifs = (limit = 50, offset = 0) => async(dispatch: AppDispatch) => {
    try{
        const response = await axios.get(`${REACT_APP_API}/trending?api_key=${KEY_API}&limit=${limit}&offset=${offset}&rating=g`)
        dispatch(gifsSlice.actions.getGifsSuccess(response.data.data))
    }catch(e){
        dispatch(gifsSlice.actions.getGifsError('Не удалось загрузить гифки'))
    }
}

export const getSearcUrl = (q: any, limit = 40, offset = 0) => async(dispatch: AppDispatch) => {
    try{
        const response = await axios.get(`${REACT_APP_API}/search?api_key=${KEY_API}&q=${q}&limit=${limit}&offset=${offset}&rating=g&lang=en`)
        dispatch(gifsSlice.actions.getSearch(response.data.data))
    }catch(e){
        dispatch(gifsSlice.actions.getSearchError('Не удалось загрузить поиск'))
    } 
}



export const getDetails = async (id: any) => {
    const response = await axios.get(`${REACT_APP_API}/${id}?api_key=${KEY_API}`)
    return response.data
}


export const getCategory = () => async(dispatch: AppDispatch) => {
    try{
         const response = await axios.get(`${REACT_APP_API}/categories?api_key=${KEY_API}`)
         dispatch(gifsSlice.actions.getCategorySuccess(response.data.data))
    }catch(e){
         dispatch(gifsSlice.actions.getCategoryError('Не удалось загрузить категории'))
    }
}