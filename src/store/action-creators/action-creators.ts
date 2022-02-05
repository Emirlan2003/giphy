import axios from "axios"
import { EActionTypes } from "../../types"

export const getGifs = (limit = 50, offset = 0) => {
    return async function (dispatch: any){
        const response = await axios.get(`https://api.giphy.com/v1/gifs/trending?api_key=J1GGI3CPZWncqU07kwGqUjE1mqOptgyE&limit=${limit}&offset=${offset}&rating=g`)
        dispatch({type: EActionTypes.GET_GIFS, payload: response.data.data})
        return response.data.data
    }
}


export const getDetails = (id: any) => {
    return async function (dispatch: any){
        const response = await axios.get(`https://api.giphy.com/v1/gifs/${id}?api_key=J1GGI3CPZWncqU07kwGqUjE1mqOptgyE`)
        dispatch({type: EActionTypes.GET_DETAILS, payload: response.data.data})
    }
}
