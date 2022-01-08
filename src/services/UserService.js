import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class UserService {
  getHomePageSets() {
    return axios.get(API_URL, { headers: authHeader() });
  }
}

function authHeader() {
  const account = JSON.parse(localStorage.getItem("account"));
  if (account) {
    return { token: account.token };
  } else {
    return {};
  }
}
export default new UserService();
