import { combineReducers } from "redux";
import { cardReducer } from "./reducers/cardReducer";
import { productReducer } from "./reducers/productReducer";
import { searchReducer } from "./reducers/searchreducer";

export const rootReducer = combineReducers({
    product:productReducer,
    card:cardReducer,
    search:searchReducer
})

export type RootState = ReturnType<typeof rootReducer>