import React from 'react'
import { useParams } from 'react-router-dom'
import List from '../Components/List'
import Product from '../Components/Product'
import { useSearch } from '../hooks/useSearch'
import { useTypedSelector } from '../hooks/useTypetSelector'

const Search:React.FC = () => {
    const {name} = useTypedSelector(state=>state.search);
    const {searchTemp} =useParams()
     
    const {result,isLoading,error} =useSearch(searchTemp?searchTemp:name)
    console.log(result)
    if(isLoading) {
        return <div>...isloading</div>
    }
    if(error) {
        return <div>{error.message}</div>
    }
    if(result){
    return (
        <List
        products={result}
        renderItem={(product) => <Product product={product} />}
      ></List>
    )}
    return <div>undifined</div>;
}

export default Search
