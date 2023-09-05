import "./CategoryNavigation.css";
import { categoryArray } from "../../const/const";
import Nav from '../Nav/Nav.js';

function CategoryNavigation(props) {

  return (
    <section className="category-navigation">
      <ul className="category-navigation-list">
        {categoryArray.map((arr) => (
          <>
            <Nav
              arr={arr}
              searchForItemsByCategory={props.searchForItemsByCategory}
            />
          </>
        ))}
      </ul>
    </section>
  );
}

export default CategoryNavigation;
