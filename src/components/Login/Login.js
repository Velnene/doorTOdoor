import "./Login.css";
import HeaderRegister from "../HeaderRegister/HeaderRegister";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MIN_LENGTH_PASSWORD } from "../../const/const";
import { Navigate } from "react-router-dom";

function Login(props) {
  const REGULAR_EXPRESSIONS = /\S+@\S+\.\S+/;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, getErrors] = useState({
    email: false,
    password: false,
  });
  const [validInputs, getValidInputs] = useState();
  const [errorMessage, getErrorMessage] = useState({
    email: "",
    password: "",
  });

  function validateEmail(email) {
    return REGULAR_EXPRESSIONS.test(email);
  }

  useEffect(() => {
    if (
      errors.password === false ||
      errors.email === false ||
      props.formDisabled === true
    ) {
      getValidInputs(true);
    } else {
      getValidInputs(false);
    }
  }, [errors, props.formDisabled]);

  function handleSetEmail(e) {
    getErrors({
      email: validateEmail(e.target.value),
      password: errors.password,
    });
    setEmail(e.target.value);
    if (validateEmail(e.target.value)) {
      getErrorMessage({
        email: "",
        password: errorMessage.password,
      });
    } else {
      getErrorMessage({
        email: "Невалидный email",
        password: errorMessage.password,
      });
    }
  }

  function handleSetPassword(e) {
    setPassword(e.target.value);
    if (e.target.value.length >= MIN_LENGTH_PASSWORD) {
      getErrors({
        email: errors.email,
        password: true,
      });
      getErrorMessage({
        email: errorMessage.email,
        password: "",
      });
    } else {
      getErrors({
        email: errors.email,
        password: false,
      });
      getErrorMessage({
        email: errorMessage.email,
        password: "Пароль не может быть меньше 8 символов",
      });
    }
  }

  function handleLogin(e) {
    e.preventDefault();
    props.onLogin(email, password);
  }

  return (
    <section className="login">
      <HeaderRegister welcome={"Рады видеть!"} />
      <form className="login__form" onSubmit={handleLogin}>
        <label className="login__lable">
          E-mail
          <input
            value={email}
            onChange={handleSetEmail}
            type="email"
            className={`login__input ${!errors.email && `login__input-error`}`}
            required
            minLength="2"
            maxLength="40"
            disabled={props.formDisabled}
          ></input>
          <span
            className={`login__error ${!errors.email && `login__error_active`}`}
          >
            {errorMessage.email}
          </span>
        </label>
        <label className="login__lable">
          Пароль
          <input
            value={password}
            onChange={handleSetPassword}
            className={`login__input ${
              !errors.password && `login__input-error`
            }`}
            type="password"
            required
            minLength="8"
            maxLength="40"
            disabled={props.formDisabled}
          ></input>
          <span
            className={`login__error ${
              !errors.password && `login__error_active`
            }`}
          >
            {errorMessage.password}
          </span>
        </label>
        <button className="login__button" disabled={validInputs}>
          Войти
        </button>
      </form>
      <span className="login__enter">
        Ещё не зарегистрированы?
        <Link to="/signup" className="login__enter-link">
          Регистрация
        </Link>
      </span>
    </section>
  );
}

export default Login;
