import axios from "axios";
import authHeader from "./authHeader";

const API_URL = process.env.REACT_APP_API_URL;

const createTransfer = (transfer) => {
  return axios.post(`${API_URL}transfer/create`, transfer, {
    headers: authHeader(),
  });
};

const getTransfers = () => {
  return axios.get(`${API_URL}transfer`, {
    headers: authHeader(),
  });
};

const getTransferById = (transferId) => {
  return axios.get(`${API_URL}transfer/${transferId}`, {
    headers: authHeader(),
  });
};

export { createTransfer, getTransfers, getTransferById };
