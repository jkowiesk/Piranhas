import axios from "axios";

const API_URL = "http://localhost:8080/api/";

class UserService {
  getPreview() {
    return axios.get(API_URL, { headers: header() });
  }

  getCourses() {
    return axios.get(API_URL + "my-courses/", { headers: header() });
  }

  getCourseSet(courseName) {
    return axios.get(API_URL + `my-courses/${courseName}`, {
      headers: header(),
    });
  }

  getCourseFlashcards(courseName, setName) {
    return axios.get(API_URL + `my-courses/${courseName}/${setName}`, {
      headers: header(),
    });
  }

  getCourseFlashcards(courseName, setName) {
    return axios.get(API_URL + `my-courses/${courseName}/${setName}`, {
      headers: header(),
    });
  }

  getMarketSet() {
    return axios.get(API_URL + "market/", { headers: header() });
  }

  getMarket() {
    return axios.get(API_URL + "market/", { headers: header() });
  }

  getFlashcards;
}

function header() {
  const account = JSON.parse(localStorage.getItem("account"));
  if (account) {
    return { token: account.token };
  } else {
    return {};
  }
}

export default new UserService();
