import { types } from "../types"

const initial ={
    numbers:[]

}

export const hwReducer =(state=initial,action)=>{
    switch(action.type){
        case types.ADD:
            let lastindex = state.numbers[state.numbers.length-1]
            
            return{...state,numbers: lastindex!==undefined ?[...state.numbers,action.payload+lastindex] : [...state.numbers,action.payload,] }
        case types.DELETE:
            return {...state,numbers:[]}
        default: return state
    }
}