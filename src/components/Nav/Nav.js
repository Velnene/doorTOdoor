import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  function searchForItemsByCategory() {
    console.log();
    props.searchForItemsByCategory(props.arr.name);
  }

  return (
    <>
      <li key={props.arr.id} className="nav__item">
        <img className="nav__image" src={props.arr.image}  alt="картинка категории"/>
        <p className="nav__item-link">{props.arr.name}</p>
        <button
          className="nav__button"
          onClick={searchForItemsByCategory}
        >
          Поиск
        </button>
      </li>
    </>
  );
}

export default Nav;
