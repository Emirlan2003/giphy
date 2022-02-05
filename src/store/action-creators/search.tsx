import axios from "axios"

export const getSearchUrl = (q: any, limit: number, offset: number) => {
    return `https://api.giphy.com/v1/gifs/search?api_key=J1GGI3CPZWncqU07kwGqUjE1mqOptgyE&q=${q}limit=${limit}&offset=${offset}&rating=g&lang=en`
}


export const searchRequest = async (text: string, limit = 40, offset = 0) => {
    const response = await axios.get(getSearchUrl(text, limit, offset))
    return response.data
}

