import React from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { fetchsingleProduct } from "../api/singleProduct";
import { addCard } from "../GLobal/actions/CardAction/CardAction";
import { SingleProduct } from "../GLobal/types/productType";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { isLoading, isFetching, data, error } = useQuery<SingleProduct,Error>(
    ["singleproduct", id],
    () => fetchsingleProduct(id)
  );

  if (isLoading) {
    return <div>...loading</div>;
  }
  if (data) {
    return (
      <div className="card me-5 pt-5 w-25">
        <img
          src={data.image}
          style={{ height: "250px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body d-flex flex-column justify-content-between ">
          <h5 className="card-title">{data.title}</h5>
          <p className="card-text">$ {data.description}</p>
          <p className="card-text">$ {data.price} </p>
          <div className="align-item-bottom">
            <button
              onClick={() => dispatch(addCard(data))}
              className="btn btn-info"
            >
              Add card
            </button>
          </div>
        </div>
      </div>
    );
  }
  if (error) {
    return <div>error ble</div>;
  }

  return null;
};

export default ProductDetails;
