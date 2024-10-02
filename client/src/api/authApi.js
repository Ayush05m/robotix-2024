import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/auth';

export const signup = (userData) => {
  return axios.post(`${API_BASE_URL}/signup`, userData);
};

export const login = (credentials) => {
  return axios.post(`${API_BASE_URL}/login`, credentials);
};

export const loginWithGoogle = (token) => {
//   return axios.post(`${API_BASE_URL}/google`, { token });
};