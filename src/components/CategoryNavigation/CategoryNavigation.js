import './CategoryNavigation.css'
function CategoryNavigation() {
  return (
    <section className="category-navigation">
      <ul className="category-navigation-list">
        <li className="category-navigation-list__item">Квартиры</li>
        <li className="category-navigation-list__item">Машины</li>
        <li className="category-navigation-list__item">Одежда</li>
        <li className="category-navigation-list__item">Личное</li>
        <li className="category-navigation-list__item">Игрушки</li>
        <li className="category-navigation-list__item">Техника</li>
      </ul>
    </section>
  );
}

export default CategoryNavigation;