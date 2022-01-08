import axios from "axios";

const API_URL = "http://localhost:8080/api/auth/";

class AuthService {
  register(email, username, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password,
    });
  }

  login(username, password) {
    return axios
      .post(API_URL + "signin", {
        username,
        password,
      })
      .then(
        (response) => {
          if (response.data) {
            localStorage.setItem("account", JSON.stringify(response.data));
          }

          return response.data;
        },
        (error) => console.log(error)
      );
  }

  logout() {
    localStorage.removeItem("account");
  }

  getUser() {
    return JSON.parse(localStorage.getItem("account"));
  }
}

export default new AuthService();
