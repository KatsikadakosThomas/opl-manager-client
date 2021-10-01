import axios from "axios";

const apiUrl = "http://localhost:3000/api/user/login";

export function login(user) {
  return axios.post(apiUrl, user);
}
