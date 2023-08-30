import "./Header.css";
import React, { useEffect } from "react";

import logo from "../../images/home_icon_255894.svg";
import SearchForm from "../SearchForm/SearchForm.js";
import { Link } from "react-router-dom";
import { Context } from "../../context/CurrentUserContext";

function Header(props) {
  const context = React.useContext(Context);

  return props.loggedIn ? (
    <section>
      <header className="header">
        <img className="header__logo-image" src={logo} alt="Логотип"></img>
        <div className="header__city">Новосибирск</div>
        <nav className="header__nav">
          <Link className="header__nav-item" to="/signup">
            Регистрация
          </Link>
          <Link className="header__nav-item" to="/signin">
            {context.email}
          </Link>
        </nav>
      </header>
      <SearchForm />
    </section>
  ) : (
    <section>
      <header className="header">
        <img className="header__logo-image" src={logo} alt="Логотип"></img>
        <div className="header__city">Новосибирск</div>
        <nav className="header__nav">
          <Link className="header__nav-item" to="/signup">
            Регистрация
          </Link>
          <Link className="header__nav-item" to="/signin">
            Вход
          </Link>
        </nav>
      </header>
      <SearchForm />
    </section>
  );
}

export default Header;
