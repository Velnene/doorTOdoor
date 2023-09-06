import "./CreateProduct.css";
import HeaderRegister from "../HeaderRegister/HeaderRegister";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import apiMain from "../../utils/MainApi";

function Login(props) {
  const navigate = useNavigate();

  const productExample = {
    category: "Квартиры",
    city: "Новосибирск",
    year: "2022",
    description: "122",
    image:
      "https://s1.1zoom.ru/b5050/653/Stones_Moss_Stream_600156_3840x2400.jpg",
    trailerLink:
      "https://s1.1zoom.ru/b5050/653/Stones_Moss_Stream_600156_3840x2400.jpg",
    nameRU: "Proverka",
  };

  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [trailerLink, setTrailerLink] = useState("");
  const [nameRU, setNameRU] = useState("");

  const [errors, getErrors] = useState({
    email: false,
    password: false,
  });
  const [validInputs, getValidInputs] = useState();
  const [errorMessage, getErrorMessage] = useState({
    email: "",
    password: "",
  });

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

  function saveProduct(e) {
    e.preventDefault();
    const jwt = localStorage.getItem("jwt");
    apiMain
      .saveProduct(
        { category, city, year, description, image, trailerLink, nameRU },
        jwt
      )
      .then((res) => {
        console.log("New Product");
        alert("New Product");
        console.log(res);
      })
      .catch((res) => {
        alert("Error");
      })
      .finally(() => {
        navigate("/");
      });
  }

  function handleSetCategory(e) {
    setCategory(e.target.value);
  }

  function handleSetCity(e) {
    setCity(e.target.value);
  }

  function handleSetYear(e) {
    setYear(e.target.value);
  }

  function handleSetdescription(e) {
    setDescription(e.target.value);
  }

  function handleSetImage(e) {
    setImage(e.target.value);
  }

  function handleSetTrailerLink(e) {
    setTrailerLink(e.target.value);
  }

  function handleSetNameRU(e) {
    setNameRU(e.target.value);
  }

  return (
    <section className="create-product">
      <HeaderRegister welcome={"New Product"} />
      <form className="create-product__form" onSubmit={saveProduct}>
        Category
        <select onChange={handleSetCategory} className="create-product__lable">
          <option value="Квартиры">Квартиры</option>
          <option value="Машины">Машины</option>
          <option value="Одежда">Одежда</option>
          <option value="Личное">Личное</option>
          <option value="Игрушки">Игрушки</option>
          <option value="Техника">Техника</option>
        </select>
        <label className="create-product__lable">
          City
          <input
            value={city}
            onChange={handleSetCity}
            type="string"
            className={`create-product__input ${!errors.email && ``}`}
            minLength="2"
            maxLength="40"
          ></input>
          <span className={` ${!errors.email && ``}`}>
            {errorMessage.email}
          </span>
        </label>{" "}
        <label className="create-product__lable">
          Year
          <input
            value={year}
            onChange={handleSetYear}
            type="string"
            className={`create-product__input ${!errors.email && ``}`}
            minLength="2"
            maxLength="40"
          ></input>
          <span className={` ${!errors.email && ``}`}>
            {errorMessage.email}
          </span>
        </label>{" "}
        <label className="create-product__lable">
          description
          <input
            value={description}
            onChange={handleSetdescription}
            type="string"
            className={`create-product__input ${!errors.email && ``}`}
            minLength="2"
            maxLength="40"
          ></input>
          <span className={` ${!errors.email && ``}`}>
            {errorMessage.email}
          </span>
        </label>{" "}
        <label className="create-product__lable">
          image
          <input
            value={image}
            onChange={handleSetImage}
            type="string"
            className={`create-product__input ${!errors.email && ``}`}
            minLength="2"
          ></input>
          <span className={` ${!errors.email && ``}`}>
            {errorMessage.email}
          </span>
        </label>{" "}
        <label className="create-product__lable">
          trailerLink
          <input
            value={trailerLink}
            onChange={handleSetTrailerLink}
            type="string"
            className={`create-product__input ${!errors.email && ``}`}
            minLength="2"
          ></input>
          <span className={` ${!errors.email && ``}`}>
            {errorMessage.email}
          </span>
        </label>
        <label className="create-product__lable">
          nameRU
          <input
            value={nameRU}
            onChange={handleSetNameRU}
            type="string"
            className={`create-product__input ${!errors.email && ``}`}
            minLength="2"
            maxLength="40"
          ></input>
          <span className={` ${!errors.email && ``}`}>
            {errorMessage.email}
          </span>
        </label>
        <button className="login__button">Создать</button>
      </form>
    </section>
  );
}

export default Login;
