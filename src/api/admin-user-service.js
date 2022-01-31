import axios from "axios";
import authHeader from "./authHeader";

const API_URL = process.env.REACT_APP_API_URL;

const getAllUser = () => {
  return axios.get(`${API_URL}user/auth/all`, {
    headers: authHeader(),
  });
};

const getUserById = (userId) => {
  return axios.get(`${API_URL}user/${userId}/auth`, {
    headers: authHeader(),
  });
};

const deleteUserById = (userId) => {
  return axios.delete(`${API_URL}user/${userId}/auth`, {
    headers: authHeader(),
  });
};

const updateUserById = (userId, values) => {
  return axios.put(`${API_URL}user/${userId}/auth`, values, {
    headers: authHeader(),
  });
};

const searchUsers = (ssn, firstName, lastName, email) => {
  var endPoint = `${API_URL}user/auth/search?`;

  {
    ssn && (endPoint += `ssn=${ssn}&`);
  }
  {
    firstName && (endPoint += `firstName=${firstName}&`);
  }
  {
    lastName && (endPoint += `lastName=${lastName}&`);
  }
  {
    email && (endPoint += `email=${email}&`);
  }

  return axios.get(endPoint, {
    headers: authHeader(),
  });
};

export { getAllUser, getUserById, deleteUserById, updateUserById, searchUsers };
