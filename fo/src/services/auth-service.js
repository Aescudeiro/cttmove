import axios from "axios";

const API_URL =
  "http://ec2-13-58-153-19.us-east-2.compute.amazonaws.com:8080/api/auth/";

const register = (
  fullName,
  email,
  password,
  birthDate,
  nif,
  ccNumber,
  taxAddress,
  postCode,
  location
) => {
  return axios.post(API_URL + "signup", {
    email,
    password,
    fullName,
    birthDate,
    nif,
    ccNumber,
    taxAddress,
    postCode,
    location,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "signin", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
