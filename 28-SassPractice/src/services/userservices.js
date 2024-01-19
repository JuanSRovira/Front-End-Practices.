import axios from 'axios'
const BASE_URL = 'http://localhost:3000'

const loginUserService = (data) => axios.post(`${BASE_URL}/Login`, data)
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)
const getAllUserServices = (jwtToken) => axios.get(`${BASE_URL}/users`, { headers: { Authorization: `Bearer ${jwtToken}` } })

export {
  loginUserService, registerUserService, getAllUserServices
}

