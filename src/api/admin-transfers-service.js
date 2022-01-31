import axios from "axios";
import authHeader from "./authHeader";

const API_URL = process.env.REACT_APP_API_URL;

const getAllTransfers = () => {
  return axios.get(`${API_URL}transfer/auth/all`, {
    headers: authHeader(),
  });
};

const getTransfersByUserId = (userId) => {
  return axios.get(`${API_URL}transfer/user/${userId}/auth`, {
    headers: authHeader(),
  });
};

const getTransfersByAccountNo = (accountNo) => {
  return axios.get(`${API_URL}transfer/${accountNo}/accountNo/auth`, {
    headers: authHeader(),
  });
};

const getTransferByTransferId = (id) => {
  return axios.get(`${API_URL}transfer/${id}/auth`, {
    headers: authHeader(),
  });
};

export {
  getAllTransfers,
  getTransfersByUserId,
  getTransfersByAccountNo,
  getTransferByTransferId,
};
