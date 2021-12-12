import { fakeApi } from "./config";
import { ALL_categories } from "./constants";

export const fetchCategories = async () =>{
    const response = await fakeApi.get<string[]>(ALL_categories);
    return response.data
}