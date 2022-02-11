import axios from "axios"
import { KEY_API, REACT_APP_API } from "../../api/api"
import { EActionTypes } from "../../types"




export const getGifs = (limit = 50, offset = 0) => {
    return async function(dispatch: any){
        const response = await axios.get(`${REACT_APP_API}/trending?api_key=${KEY_API}&limit=${limit}&offset=${offset}&rating=g`)
        dispatch({type: EActionTypes.GET_GIFS, payload: response.data.data})
    }
}




export const getCategory = () => {
    return async function(dispatch: any){
        const response = await axios.get(`${REACT_APP_API}/categories?api_key=${KEY_API}`)
        dispatch({type: EActionTypes.GET_CATEGORY, payload: response.data.data})
    }
}


export const getRandomGifs = () => {
    return async function(dispatch: any){
        const response = await axios.get(`${REACT_APP_API}/random?api_key=${KEY_API}&tag=smile&rating=g`)
        dispatch({type: EActionTypes.GET_RANDOM, payload: response.data.data})
    }
}


export const getDetails = async (id: any) => {
    const response = await axios.get(`${REACT_APP_API}/${id}?api_key=${KEY_API}`)
    return response.data
}

