import { useEffect, useState } from "react";
import apiMain from "../../utils/MainApi";
import Product from "../Product/Product";
import "./ProductsList.css";

function ProductsList(props) {

  const productExample = {
    category: 'Квартиры',
    city: "Новосибирск",
    year: "2022",
    description: "122",
    image:
      "https://s1.1zoom.ru/b5050/653/Stones_Moss_Stream_600156_3840x2400.jpg",
    trailerLink:
      "https://s1.1zoom.ru/b5050/653/Stones_Moss_Stream_600156_3840x2400.jpg",
    nameRU: "Proverka",
  };

  
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

  function saveProduct() {
    const jwt = localStorage.getItem("jwt");
    apiMain
      .saveProduct(productExample, jwt)
      .then((res) => {
        console.log("New Product");
        alert("New Product");
        console.log(res);
      })
      .catch((res) => {
        alert("Error");
      });
  }

  function deleteProduct(id) {
    const jwt = localStorage.getItem("jwt");
    console.log(id);
    apiMain
      .deleteProduct(id, jwt)
      .then((res) => {
        console.log("Delete Product");
        alert("Delete Product");
        console.log(res);
      })
      .catch((res) => {
        alert("Error");
      });
  }

  return (
    <section className="products">
      <button onClick={saveProduct}>New Product</button>
      <button onClick={getSavedProduct}>Get Product</button>
      <section className="product-list">
        {props.product.map((product) => (
          <Product
            key={product._id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </section>
    </section>
  );
}

export default ProductsList;
