import axios from "axios"
import { EActionTypes } from "../../types"

export const getGifs = () => {
    return async function (dispatch: any){
        const response = await axios.get('https://api.giphy.com/v1/gifs/trending?api_key=J1GGI3CPZWncqU07kwGqUjE1mqOptgyE&limit=50&rating=g')
        dispatch({type: EActionTypes.GET_GIFS, payload: response.data.data})
    }
}
