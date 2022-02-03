import { ActionTypes, EActionTypes, IInit } from "../../types"



export const initState: IInit = {
     gifs: []
}

export const gifsReducers = (state = initState, action: ActionTypes): IInit => {
    switch(action.type){
        case EActionTypes.GET_GIFS:
            return { ...state, gifs: action.payload }
        default:
             return state
    }
}