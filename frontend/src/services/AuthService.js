import axios from "axios";

const API_URL = "https://piranhas-flashcards.herokuapp.com/api/";

class AuthService {
  register(emailAddress, userName, password) {
    return axios.post(API_URL + "signup", {
      userName,
      password,
      emailAddress,
    });
  }

  login(userName, password, onSuccess, onError) {
    return axios
      .post(API_URL + "signin", {
        userName,
        password,
      })
      .then(
        (response) => {
          if (response.data) {
            localStorage.setItem("token", JSON.stringify(response.data));
            onSuccess(response);
          }
        },
        (error) => onError(error)
      );
  }

  isLogged() {
    const token = localStorage.getItem("token");
    return token == null ? false : true;
  }

  logout() {
    localStorage.removeItem("token");
  }

  getUser() {
    return JSON.parse(localStorage.getItem("token"));
  }
}

export default new AuthService();
