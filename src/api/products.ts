import { SingleProduct } from "../GLobal/types/productType";
import { fakeApi } from "./config"
import { ALL_PRODUCTS } from "./constants"

export const fetchALLProducts = async() => {
    const response = await fakeApi.get<SingleProduct[]>(ALL_PRODUCTS);
    return response.data
}