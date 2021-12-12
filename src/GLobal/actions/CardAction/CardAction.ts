import { SingleProduct } from "../../types/productType";
import { CardActionTypes } from "./CardActionTypes";


export const showCardItems = () => {
  return {
    type: CardActionTypes.SHOW_CART_ITEMS,
  };
};
export const addCard = (cardItem:SingleProduct) => {
  return {
    type: CardActionTypes.ADD_CARD,
    payload: cardItem,
  };
};

export const deleteCard = (id:number) => {
  return {
    type: CardActionTypes.REMOVE_CARD,
    payload: id,
  };
};
