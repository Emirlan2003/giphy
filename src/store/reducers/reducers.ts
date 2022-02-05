import { ActionTypes, EActionTypes, IInit } from "../../types"



export const initState: IInit = {
     gifs: [],
     details: {}
}

export const gifsReducers = (state = initState, action: ActionTypes): IInit => {
    switch(action.type){
        case EActionTypes.GET_GIFS:
            return { ...state, gifs: action.payload };
        case EActionTypes.GET_DETAILS:
            return { ...state, details: action.payload }
        default:
             return state
    }
}