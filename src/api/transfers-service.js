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
  return axios.get(`${API_URL}Transfers/${transferId}`, {
    headers: authHeader(),
  });
};

const downloadTransfers = () => {
  return axios.get(`${API_URL}excel/download/transfer`, {
    headers: {
      ...authHeader(),
      "Content-Type":
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    },
    responseType: "arraybuffer",
  });
};

export { createTransfer, getTransfers, getTransferById, downloadTransfers };
