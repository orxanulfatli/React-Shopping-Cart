import {  SearchActionTypes, SearchItem } from "../actions/SearchAction/SearchActionTypes";

export interface SearchState {
    name: string
}
const initialState: SearchState = {
    name:""
};

export const searchReducer = (state = initialState, action: SearchItem): SearchState => {
    switch (action.type) {
        case SearchActionTypes.SEARCH:
            return {
                ...state,
                name: action.payload,
            }
        default:
            return state
    }
}