import { fakeApi } from "./config"
import {SingleProduct} from '../GLobal/types/productType'

export const fetchProductForCategory = async(category:string|undefined) =>{
    const response = await fakeApi.get<SingleProduct[]>(`/products/category/${category}`)
    return response.data
};
