import "./SearchForm.css";
import { useState } from "react";

function SearchForm(props) {
  const [value, getValue] = useState("");
  const [valid, getValid] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSerchFilm(value);
  }

  function handleChangeInput(e) {
    getValue(e.target.value);
    if (e.target.value === "") {
      getValid(false);
    } else {
      getValid(true);
    }
  }

  return (
    <div className="search-form">
      <form className="search-form__item" onSubmit={handleSubmit}>
        <input
          className="search-form__input"
          onChange={handleChangeInput}
          value={value}
          type="text"
          required
        ></input>
        <span
          className={`search-form__valid ${
            !valid && `search-form__valid_active`
          }`}
        >
          Нужно ввести ключевое слово
        </span>
        <button className="search-form__button"></button>
      </form>
    </div>
  );
}

export default SearchForm;
