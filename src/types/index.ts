export enum EActionTypes {
    GET_GIFS = "GET_GIFS",
    GET_DETAILS = "GET_DETAILS"
}


export interface IInit {
    gifs: any[],
    details: any
}


export interface ActionTypesGetGifs {
    type: EActionTypes.GET_GIFS,
    payload: any[]
}

export interface ActionTypesGetDetails {
    type: EActionTypes.GET_DETAILS,
    payload: any
}


export type ActionTypes = ActionTypesGetGifs
                        | ActionTypesGetDetails