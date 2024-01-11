import axios from 'axios'
const BASE_URL = 'https://ecomerceproject.onrender.com'

const loginUserService = (data) => axios.post(`${BASE_URL}/login`, data)
const registerUserService = (data) => axios.post(`${BASE_URL}/register`, data)

export {
  loginUserService, registerUserService
}
