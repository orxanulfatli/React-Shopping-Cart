import { ProductState } from "../../reducers/productReducer"
import { ProductActionTypes } from "./ProductActionTypes"

export const getProductId = (id:ProductState) =>{
    return {
        type:ProductActionTypes.GET_PRODUCT_ID,
        payload:id
    }
}

