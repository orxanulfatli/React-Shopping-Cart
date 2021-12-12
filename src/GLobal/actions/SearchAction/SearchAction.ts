import { SearchActionTypes } from "./SearchActionTypes"

export const addSearchItem = (name:string) =>{
    return {
        type:SearchActionTypes.SEARCH,
        payload:name

    }
}