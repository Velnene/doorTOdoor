import "./Product.css";

function Product(props) {
  function deleteProduct() {
    props.deleteProduct(props.product._id);
  }

  return (
    <>
      <div className="product__item">
        {props.product.nameRU}{" "}
        <button className="product__item-delete-button" onClick={deleteProduct}>
          deleteProduct Product
        </button>
      </div>{" "}
    </>
  );
}

export default Product;
