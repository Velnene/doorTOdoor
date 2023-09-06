import { useEffect, useState } from "react";
import apiMain from "../../utils/MainApi";
import Product from "../Product/Product";
import "./ProductsList.css";
import { useNavigate } from "react-router-dom";

function ProductsList(props) {
  const navigate = useNavigate();

  function navigateProduct() {
    navigate("/newproduct");
  }

  return (
    <section className="products">
      <button className="product__new-product" onClick={navigateProduct}>New Product</button>
      <section className="product-list">
        {props.product.map((product) => (
          <Product
            key={product._id}
            product={product}
            deleteProduct={props.deleteProduct}
          />
        ))}
      </section>
    </section>
  );
}

export default ProductsList;
