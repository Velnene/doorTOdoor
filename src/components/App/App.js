import "./App.css";
import { useNavigate } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Register from "../Register/Register";
import Login from "../Login/Login.js";
import CategoryNavigation from "../CategoryNavigation/CategoryNavigation.js";
import ProductsList from "../ProductsList/ProductsList.js";
import { Context } from "../../context/CurrentUserContext";
import React, { useState, useEffect } from "react";
import apiMain from "../../utils/MainApi";

function App() {
  const navigate = useNavigate("");

  const [currentUser, setUserInfo] = useState({ name: "Viktor" });
  const [formDisabled, getFormDisabled] = useState(false);
  const defaultLogged = localStorage.getItem("jwt") ? true : false;
  const [loggedIn, setLoggedIn] = useState(defaultLogged);

// Проверка на наличие jwt
 useEffect(() => {
   const jwt = localStorage.getItem("jwt");
   if (!jwt) {
     return;
   } else {
     apiMain
       .getSign(jwt)
       .then((res) => {
         setLoggedIn(true);
       })
       .catch((err) => {
         alert("1");
       });
   }
 }, []);
  
   useEffect(() => {
     const jwt = localStorage.getItem("jwt");
     if (loggedIn) {
       apiMain
         .getUserInfo(jwt)
         .then((res) => {
           setUserInfo(res);
         })
         .catch((err) => {
           alert("2");
         });
     }
   }, [loggedIn]);
  
  

  // Register
  function handleRegister(name, email, password) {
    if (!password || !email || !name) {
      return;
    }
    getFormDisabled(true);
    apiMain
      .signUp(name, email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        handleLogin(email, password);
      })
      .catch((res) => {
        console.log(res);
        alert("Пользователь уже зарегистрирован");
      })
      .finally(() => {
        getFormDisabled(false);
      });
  }

  // function Login
  function handleLogin(email, password) {
    if (!password || !email) {
      return;
    }
    getFormDisabled(true);
    apiMain
      .signIn(email, password)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/");
      })
      .catch((err) => {
        alert("Неверные данные");
      })
      .finally(() => {
        getFormDisabled(false);
      });
  }

  return (
    <Context.Provider value={currentUser}>
      <div className="app__container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header loggedIn={loggedIn} />
                <CategoryNavigation />
                <ProductsList />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <Register
                  formDisabled={formDisabled}
                  onRegister={handleRegister}
                  loggedIn={loggedIn}
                />
              </>
            }
          />
          <Route
            path="/signin"
            element={
              <Login
                onLogin={handleLogin}
                loggedIn={loggedIn}
                formDisabled={formDisabled}
              />
            }
          />
        </Routes>
      </div>
    </Context.Provider>
  );
}

export default App;
