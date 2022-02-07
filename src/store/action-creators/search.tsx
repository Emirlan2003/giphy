import axios from "axios"
import { EActionTypes } from "../../types"


export const getSearchUrl = (q: any, limit = 40, offset = 0) => {
    return async function(dispatch: any){
        const res = await axios.get(`https://api.giphy.com/v1/gifs/search?api_key=J1GGI3CPZWncqU07kwGqUjE1mqOptgyE&q=${q}&limit=${limit}&offset=${offset}&rating=g&lang=en`)
        dispatch({type: EActionTypes.GET_SEARCH, payload: res.data.data})
    }
}
