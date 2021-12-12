import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";
import { SingleProduct } from "../GLobal/types/productType";
import { useActions } from "../hooks/useAction";

interface ProductProps {
  product: SingleProduct;
}
const Product: React.FC<ProductProps> = ({ product }) => {
  const { getProductId } = useActions();
  const navigate = useNavigate();
  const handleClick = (payload: any) => {
    navigate(`/products/${payload}`, { replace: true });
    getProductId({ id: product.id });
  };

  {
    return (
      <div className="card me-5 pt-5 w-25">
        <img
          src={product.image}
          style={{ height: "250px" }}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body d-flex flex-column justify-content-between ">
          <button onClick={() => handleClick(product.id)} className="btn btn-light" style={{textDecoration:'underline'}}>
            <h5 className="card-title">{product.title}</h5>
          </button>

          <p className="card-text">$ {product.price}</p>
        </div>
      </div>
    );
  }
};

export default Product;
