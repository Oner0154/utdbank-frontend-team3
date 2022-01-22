import axios from "axios";
import authHeader from "./authHeader";

const API_URL = process.env.REACT_APP_API_URL;

const createAccount = (Account) => {
  return axios.post(`${API_URL}account/create`, Account, {
    headers: authHeader(),
  });
};

const getAccounts = () => {
  return axios.get(`${API_URL}account`, {
    headers: authHeader(),
  });
};

const getAccountById = (AccountId) => {
  return axios.get(`${API_URL}accounts/${AccountId}`, {
    headers: authHeader(),
  });
};

const downloadAccounts = () => {
  return axios.get(`${API_URL}excel/download/account`, {
    headers: {
      ...authHeader(),
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    responseType: "arraybuffer",
  });
};

export { createAccount, getAccounts, getAccountById, downloadAccounts };
