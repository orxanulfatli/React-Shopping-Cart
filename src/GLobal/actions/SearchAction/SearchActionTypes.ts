export enum SearchActionTypes {
    SEARCH='SEARCH',
  
}

export interface SearchItem{
    type:SearchActionTypes.SEARCH
    payload:string
}

