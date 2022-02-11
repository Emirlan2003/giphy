export enum EActionTypes {
    GET_GIFS = "GET_GIFS",
    GET_DETAILS = "GET_DETAILS",
    GET_SEARCH = "GET_SEARCH",
    GET_CATEGORY = "GET_CATEGORY",
    GET_RANDOM = "GET_RANDOM"
}


interface IGifs {
    id: string | number,
    url: string | number,
    previewUrl: any,
    title: string
}

interface IDetails {
    id: string | number,
    url: string | number,
    title: string,
    import_datetime: number
}


interface ISearch {
    id: string | number,
    url: string | number,
    previewUrl: any,
    title: string
}


interface ICategory {
    id: string | number,
    name: string,
    subcategories: any[],
    gif: any
}

export interface IInit {
    gifs: IGifs[],
    details: IDetails[],
    search: ISearch[],
    category: ICategory[],
    random: any
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

interface ActionTypedGetFavorites {
    type: EActionTypes.GET_RANDOM,
    payload: any
}


export type ActionTypes = ActionTypesGetGifs
                        | ActionTypesGetDetails
                        | ActionTypesGetSearch
                        | ActionTypesGetCategory
                        | ActionTypedGetFavorites