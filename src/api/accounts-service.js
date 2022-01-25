import axios from "axios"
import authHeader from "./authHeader"
const API_URL = process.env.REACT_APP_API_URL
const createAccount = (Account) => {
  return axios.post(`${API_URL}account/create`, Account, {
    headers: authHeader(),
  })
}
const getAccounts = () => {
  return axios.get(`${API_URL}account`, {
    headers: authHeader(),
  })
}
const getAccountById = (accountId) => {
  return axios.get(`${API_URL}account/${accountId}/user`, {
    headers: authHeader(),
  })
}
const updateAccount = (accountNo, account) => {
  return axios.put(`${API_URL}account/${accountNo}/update`, account, {
    headers: authHeader(),
  })
}
const deleteAccount = (accountNo) => {
  return axios.delete(`${API_URL}account/${accountNo}`, {
    headers: authHeader(),
  })
}
export {
  createAccount,
  getAccounts,
  getAccountById,
  updateAccount,
  deleteAccount,
}
