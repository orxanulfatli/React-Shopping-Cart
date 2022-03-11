import React from "react";
import { useQuery } from "react-query";
import { fetchALLProducts } from "../api/products";
import List from "../Components/List";
import Product from "../Components/Product";

const Home:React.FC = () => {
  const { isLoading, isFetching, data, error } = useQuery(
    "products",
    fetchALLProducts
  );
  if (isLoading || isFetching) {
    return <div>loading</div>;
  }

  if (data) {
    return (
      <List
        products={data}
        renderItem={(product) => <Product product={product} />}
      ></List>
    );
  }

  if (error) {
    return <div>error </div>;
  }
  return null;
};

export default Home;
