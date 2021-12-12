import { ProductActionType, ProductActionTypes } from "../actions/ProductAction/ProductActionTypes";

export interface ProductState {
   id:null|number
}

const initState :ProductState = {
    id:null
}

export const productReducer = (state=initState,action:ProductActionType):ProductState =>{
    switch (action.type) {
        case ProductActionTypes.GET_PRODUCT_ID:
            return {
                ...state,
                id:action.payload
            }
            
            
    
        default:
            return state;
    }
}