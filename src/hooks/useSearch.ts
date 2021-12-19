import { useQuery } from "react-query"
import { fetchALLProducts } from "../api/products"
import { SingleProduct } from "../GLobal/types/productType"

export const useSearch = (name:string) =>{
    const {data,isLoading,error} =useQuery<SingleProduct[],Error>('search',fetchALLProducts);
    const result = data?.filter((item:SingleProduct)=> item.title.toLowerCase().includes(name))
    return {result,isLoading,error}

}
