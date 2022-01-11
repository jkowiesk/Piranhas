import axios from "axios";

const API_URL = "https://vast-sierra-17368.herokuapp.com/api/";

class AuthService {
  register(email, username, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  login(userName, password) {
    return axios
      .post(API_URL + "signin", {
        userName,
        password,
      })
      .then(
        (response) => {
          if (response.data) {
            console.log(response.data);
            localStorage.setItem("token", JSON.stringify(response.data));
          }
        },
        (error) => console.log(error)
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
