import axios from "axios"
import authHeader from "./authHeader"
const API_URL = process.env.REACT_APP_API_URL

const getAllAccounts = () => {
  return axios.get(`${API_URL}account/auth/all`, {
    headers: authHeader(),
  })
}
const getAccountByAccountNo = (id) => {
  return axios.get(`${API_URL}account/${id}/auth`, {
    headers: authHeader(),
  })
}
const updateAccounts = (accountNo, account) => {
  return axios.put(`${API_URL}account/${accountNo}/auth`, account, {
    headers: authHeader(),
  })
}
const deleteAccounts = (accountNo) => {
  return axios.delete(`${API_URL}account/${accountNo}/auth`, {
    headers: authHeader(),
  })
}
export { getAllAccounts, updateAccounts, deleteAccounts, getAccountByAccountNo }
