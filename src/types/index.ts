export enum EActionTypes {
    GET_GIFS = "GET_GIFS"
}


export interface IInit {
    gifs: any[]
}


export interface ActionTypesGetGifs {
    type: EActionTypes.GET_GIFS,
    payload: any[]
}


export type ActionTypes = ActionTypesGetGifs