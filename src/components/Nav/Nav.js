import './Nav.css'
import { Link } from "react-router-dom";

function Nav(props) {

 function searchForItemsByCategory() {
   console.log();
   props.searchForItemsByCategory(props.arr.name);
 }

  return (
    <>
      {" "}
      <button onClick={searchForItemsByCategory}>ляляля</button>
      <li key={props.arr.id} className="category-navigation-list__item">
        <Link className="category-navigation-list__item-link" to={props.arr.link}>
          {props.arr.name}
        </Link>
      </li>
    </>
  );
}

export default Nav;