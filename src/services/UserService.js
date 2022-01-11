import axios from "axios";

const API_URL = "https://vast-sierra-17368.herokuapp.com/api/";

class UserService {
  getPreview() {
    return axios.get(API_URL);
  }

  getCourses() {
    console.log(header());
    return axios.get(API_URL + "my-courses", { headers: header() });
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

  getMarketSets() {
    return axios.get(API_URL + "market");
  }
}

function header() {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    return { Authorization: "Bearer " + token };
  } else {
    return {};
  }
}

export default new UserService();
