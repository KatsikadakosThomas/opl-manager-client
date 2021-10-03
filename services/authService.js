import axios from "axios";

const apiUrl = "http://localhost:3000/api/user";

export function login(user) {
  return axios.post(`${apiUrl}/login`, user, { withCredentials: true });
}
const register = (user) => {
  return axios.post(`${apiUrl}/register`, user, { withCredentials: true });
};

const call = {
  register: register,
};

module.exports = call;
