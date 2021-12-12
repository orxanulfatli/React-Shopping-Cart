import { SingleProduct } from "../GLobal/types/productType";
import { fakeApi } from "./config"

export const fetchsingleProduct = async(id:string|undefined) => {
    const response =await fakeApi.get<SingleProduct>(`products/${id}`);
    return response.data
}