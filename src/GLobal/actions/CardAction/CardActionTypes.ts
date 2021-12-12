import { SingleProduct } from "../../types/productType";




export enum CardActionTypes {
    ADD_CARD='ADD_CARD',
    REMOVE_CARD ="REMOVE_CARD",
    SHOW_CART_ITEMS='SHOW_CART_ITEMS',
}

export interface AddCard{
    type:CardActionTypes.ADD_CARD
    payload:SingleProduct
}

export interface RemoveCard {
    type:CardActionTypes.REMOVE_CARD
    payload:number
}
export interface ShowCartItems {
    type:CardActionTypes.SHOW_CART_ITEMS

}
export type CardAction = AddCard|RemoveCard|ShowCartItems
