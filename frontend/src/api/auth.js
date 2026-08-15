import api from './axiosInstance'

export const registerUser = (data) =>
  api.post('/auth/user/register', data).then((res) => res.data)

export const loginUser = (data) =>
  api.post('/auth/user/login', data).then((res) => res.data)

export const logoutUser = () =>
  api.get('/auth/user/logout').then((res) => res.data)

export const registerFoodPartner = (data) =>
  api.post('/auth/foodpartner/register', data).then((res) => res.data)

export const loginFoodPartner = (data) =>
  api.post('/auth/foodpartner/login', data).then((res) => res.data)

export const logoutFoodPartner = () =>
  api.get('/auth/foodpartner/logout').then((res) => res.data)
