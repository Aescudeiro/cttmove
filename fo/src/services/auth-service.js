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
  return axios.post(API_URL + "register-user", {
    email: email,
    pass: password,
    fullName: fullName,
    birthDate: birthDate,
    nif: nif,
    ccNumber: ccNumber,
    taxAddress: taxAddress,
    postCode: postCode,
    locality: location,
  });
};

const update = (
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
  return axios.post(
    API_URL + "update-user",
    {
      email: email,
      pass: password,
      fullName: fullName,
      birthDate: birthDate,
      nif: nif,
      ccNumber: ccNumber,
      taxAddress: taxAddress,
      postCode: postCode,
      locality: location,
    },
    {
      Authorization: JSON.parse(localStorage.getItem("user")).token,
    }
  );
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
  if (localStorage.getItem("user")) {
    return JSON.parse(localStorage.getItem("user")).user;
  }
};

export default {
  update,
  register,
  login,
  logout,
  getCurrentUser,
};
