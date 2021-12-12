import { CardAction, CardActionTypes} from "../actions/CardAction/CardActionTypes";
import { SingleProduct } from "../types/productType";

interface CardState {
    card: SingleProduct[];
    totalPrice: number;
    quantity: number;
}
const initState: CardState = {
    card: [],
    totalPrice: 0,
    quantity: 0,
};
export const cardReducer = (
    state = initState,
    action: CardAction
): CardState => {
    switch (action.type) {
        case CardActionTypes.SHOW_CART_ITEMS:
            let products: SingleProduct[] = JSON.parse(
                localStorage.getItem("cartitem") || ''
            );
            let sum = 0;
            for (let i = 0; i < products.length; i++) {
                sum = sum + products[i].price;
            }
            return {
                ...state,
                card: products,
                totalPrice: sum,
                quantity: products.length,
            };

        case CardActionTypes.ADD_CARD:
            const cart:SingleProduct[] = [...state.card,action.payload];
            let total = 0;
            for (let i = 0; i < cart.length; i++) {
                total = total + cart[i].price;
            }
            localStorage.setItem("cartitem", JSON.stringify(cart));
            return {
                ...state,
                card: [...state.card, action.payload],
                totalPrice: total,
                quantity: state.quantity + 1,
            };

        case CardActionTypes.REMOVE_CARD:
            let cartlist: SingleProduct[] = JSON.parse(
                localStorage.getItem("cartitem")|| ''
            );
            const newCard = cartlist.filter((cardItem) => cardItem.id !== action.payload);
            let newTotal = 0;
            for (let i = 0; i < newCard.length; i++) {
                newTotal = newTotal + newCard[i].price;
            }
            localStorage.setItem("cartitem", JSON.stringify(newCard));
            return {
                ...state,
                card: newCard,
                totalPrice: newTotal,
                quantity: state.quantity - 1,
            };

        default:
            return state;
    }
};
