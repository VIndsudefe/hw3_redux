import { types } from "./types"

export const addAction =(number)=>{
    return {
        type:types.ADD,
        payload: number
    }
}

export const deleteAction =()=>{
    return {
        type:types.DELETE
    }
}