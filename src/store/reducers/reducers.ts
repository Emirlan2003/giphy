import { ActionTypes, EActionTypes, IInit } from "../../types"



export const initState: IInit = {
     gifs: [],
     details: [],
     search: [],
     category: [],
     random: {}
}

export const gifsReducers = (state = initState, action: ActionTypes): IInit => {
    switch(action.type){
        case EActionTypes.GET_GIFS:
            return { ...state, gifs: action.payload };
        case EActionTypes.GET_DETAILS:
            return { ...state, details: action.payload };
        case EActionTypes.GET_SEARCH:
            return { ...state, search: action.payload };
        case EActionTypes.GET_CATEGORY:
            return { ...state, category: action.payload };
        case EActionTypes.GET_RANDOM:
            return { ...state, random: action.payload}
        default:
             return state
    }
}