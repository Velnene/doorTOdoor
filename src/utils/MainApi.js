class SaveMovies {

  constructor() {
    this._url = "http://localhost:3001";
  }

  getSavedProduct(jwt) {
    return fetch(this._url + '/product', {
      headers: {
        authorization: `Bearer ${jwt}`
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

  saveProduct({category, city, year, description, image, trailerLink, nameRU}, jwt) {
    return fetch(this._url + '/product', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`,
      },
      body: JSON.stringify({
        category: category,
        city: city,
        year: year,
        description: description,
        image: image,
        trailerLink: trailerLink,
        nameRU: nameRU,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Ошибка: ${res.status}`);
      }
    });
  }

  signUp(name, email, password) {
    return fetch(this._url + "/signup", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

  signIn(email, password) {
    return fetch(this._url + "/signin", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

  getUserInfo(jwt) {
    return fetch(this._url + '/users/me', {
      headers: {
        authorization: `Bearer ${jwt}`
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

  getSign(jwt) {
    return fetch(this._url + '/users/me', {
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${jwt}`
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

  changeUserInfo({ name, email }, jwt) {
    console.log(name + email)
    return fetch(this._url + '/users/me', {
      method: 'PATCH',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email
      })
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

  deleteProduct(idFilm, jwt) {
    return fetch(this._url + '/product/' + idFilm , {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${jwt}`,
        'Content-Type': 'application/json'
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        else {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
      })
  }

}

const apiMain = new SaveMovies();
export default apiMain;