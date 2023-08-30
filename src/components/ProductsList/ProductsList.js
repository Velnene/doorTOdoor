import "./ProductsList.css";

function ProductsList(props) {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <section className="products">
      <ul className="product-list">
        {arr.map((arr) => (
          <li className="product-list__item">{arr}</li>
        ))}
      </ul>
    </section>
  );
}

export default ProductsList;
