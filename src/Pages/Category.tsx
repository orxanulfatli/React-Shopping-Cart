import React from "react";
import { useQuery } from "react-query";
import { Outlet, useParams } from "react-router";
import { fetchProductForCategory } from "../api/productForCategory";
import List from "../Components/List";
import Product from "../Components/Product";
import { SingleProduct } from "../GLobal/types/productType";

const Category:React.FC = () => {
  const { category } = useParams();
  const { isLoading, isFetching, data, error } = useQuery<SingleProduct[],Error>(
    ["productsforcategory", category],
    () => fetchProductForCategory(category)
  );

  if (isLoading || isFetching) {
    return <div>loading</div>;
  }
  if (data) {
    return (
      <div>
        <Outlet></Outlet>
        <List
          products={data}
          renderItem={(product) => <Product product={product} />}
        />
      </div>
    );
  }
  if (error) {
    return <div>{error}</div>;
  }
  return null;
};

export default Category;
