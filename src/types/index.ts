export enum EActionTypes {
    GET_GIFS = "GET_GIFS",
    GET_DETAILS = "GET_DETAILS",
    GET_SEARCH = "GET_SEARCH",
    GET_CATEGORY = "GET_CATEGORY"
}


export interface IInit {
    gifs: any[],
    details: any,
    search: any[],
    category: any[]
}


interface ActionTypesGetGifs {
    type: EActionTypes.GET_GIFS,
    payload: any[]
}

interface ActionTypesGetDetails {
    type: EActionTypes.GET_DETAILS,
    payload: any
}

interface ActionTypesGetSearch {
    type: EActionTypes.GET_SEARCH,
    payload: any[]
}

interface ActionTypesGetCategory {
    type: EActionTypes.GET_CATEGORY,
    payload: any[]
}


export type ActionTypes = ActionTypesGetGifs
                        | ActionTypesGetDetails
                        | ActionTypesGetSearch
                        | ActionTypesGetCategory