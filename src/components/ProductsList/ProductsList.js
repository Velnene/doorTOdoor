import { useEffect, useState } from "react";
import apiMain from "../../utils/MainApi";
import Product from "../Product/Product";
import "./ProductsList.css";
import { useNavigate } from "react-router-dom";

function ProductsList(props) {
  const navigate = useNavigate();

  
  function getSavedProduct() {
    const jwt = localStorage.getItem("jwt");
    apiMain
      .getSavedProduct(jwt)
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        alert("Error");
      });
  }

  function navigateProduct() {
    navigate("/newproduct");
  }



  return (
    <section className="products">
      <button onClick={navigateProduct}>New Product</button>
      <button onClick={getSavedProduct}>Get Product</button>
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
