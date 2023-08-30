import "./Register.css";
import { Navigate } from "react-router-dom";
import HeaderRegister from "../HeaderRegister/HeaderRegister.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MIN_LENGTH_PASSWORD, MIN_LENGTH_NAME } from "../../const/const";

function Register(props) {
  const REGULAR_EXPRESSIONS = /\S+@\S+\.\S+/;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, getErrors] = useState({
    name: false,
    email: false,
    password: false,
  });
  const [validInputs, getValidInputs] = useState();
  const [errorMessage, getErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (
      errors.name === false ||
      errors.password === false ||
      errors.email === false
    ) {
      getValidInputs(true);
    } else {
      getValidInputs(false);
    }
  }, [errors]);

  function validateEmail(email) {
    return REGULAR_EXPRESSIONS.test(email);
  }

  function handleSetEmail(e) {
    getErrors({
      name: errors.name,
      email: validateEmail(e.target.value),
      password: errors.password,
    });
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      getErrorMessage({
        name: errorMessage.name,
        email: "",
        password: errorMessage.password,
      });
    } else {
      getErrorMessage({
        name: errorMessage.name,
        email: "Невалидный email",
        password: errorMessage.password,
      });
    }
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
    if (e.target.value.length >= MIN_LENGTH_PASSWORD) {
      getErrors({
        name: errors.name,
        email: errors.email,
        password: true,
      });
      getErrorMessage({
        name: errorMessage.name,
        email: errorMessage.email,
        password: "",
      });
    } else {
      getErrors({
        name: errors.name,
        email: errors.email,
        password: false,
      });
      getErrorMessage({
        name: errorMessage.name,
        email: errorMessage.email,
        password: "Пароль не может быть меньше 8 символов",
      });
    }
  }

  function handleSetName(e) {
    setName(e.target.value);
    if (e.target.value.length >= MIN_LENGTH_NAME) {
      getErrorMessage({
        name: "",
        email: errorMessage.email,
        password: errorMessage.password,
      });
      getErrors({
        name: true,
        email: errors.email,
        password: errors.password,
      });
    } else {
      getErrorMessage({
        name: "Имя не может быть короче 2 символов",
        email: errorMessage.email,
        password: errorMessage.password,
      });
      getErrors({
        name: false,
        email: errors.email,
        password: errors.password,
      });
    }
  }

  function handleRegister(e) {
    e.preventDefault();
    props.onRegister(name, email, password);
  }

  return (
    <section className="register">
      <HeaderRegister welcome={"Добро пожаловать!"} />
      <form className="register__form" onSubmit={handleRegister}>
        <label className="register__lable">
          Имя
          <input
            value={name}
            onChange={handleSetName}
            type="text"
            className={`register__input ${
              !errors.name && `register__input-error`
            }`}
            required
            minLength="2"
            maxLength="40"
            disabled={props.formDisabled}
          ></input>
          <span
            className={`register__error ${
              !errors.name && `register__error_active`
            }`}
          >
            {errorMessage.name}
          </span>
        </label>
        <label className="register__lable">
          E-mail
          <input
            value={email}
            onChange={handleSetEmail}
            type="email"
            className={`register__input ${
              !errors.email && `register__input-error`
            }`}
            required
            minLength="2"
            maxLength="40"
            disabled={props.formDisabled}
          ></input>
          <span
            className={`register__error ${
              !errors.email && `register__error_active`
            }`}
          >
            {errorMessage.email}
          </span>
        </label>
        <label className="register__lable">
          Пароль
          <input
            value={password}
            onChange={handleSetPassword}
            className={`register__input ${
              !errors.password && `register__input-error`
            } `}
            type="password"
            required
            minLength="8"
            maxLength="40"
            disabled={props.formDisabled}
          ></input>
          <span
            className={`register__error ${
              !errors.password && `register__error_active`
            }`}
          >
            {errorMessage.password}
          </span>
        </label>
        <button className="register__button" disabled={validInputs}>
          Зарегистрироваться
        </button>
      </form>
      <span className="register__enter">
        Уже зарегистрированы?
        <Link to="/signin" className="register__enter-link">
          Войти
        </Link>
      </span>
    </section>
  );
}

export default Register;
