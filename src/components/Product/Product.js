import "./Product.css";

function Product(props) {
  
  function deleteProduct() {
    props.deleteProduct(props.product._id);
  }

  return (
    <>
      <div className="product__item">
        <img
          className="product__image"
          src={props.product.image}
          alt="фото продукта"
        />
        <p className="product__name">{props.product.nameRU}</p>
        <button className="product__item-delete-button" onClick={deleteProduct}>
          deleteProduct Product
        </button>
      </div>{" "}
    </>
  );
}

export default Product;
