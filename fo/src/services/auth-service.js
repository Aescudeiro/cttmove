import axios from "axios";

const API_URL = "https://localhost:5001/api/auth/";

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
  const login = {
    email: email,
    pass: password,
  };
  return axios.post(API_URL + "login", login).then((response) => {
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  });
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user")).user;
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
};
