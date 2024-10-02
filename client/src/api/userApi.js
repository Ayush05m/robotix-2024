import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/user';

export const getUser = (userId) => {
  return axios.get(`${API_BASE_URL}/${userId}`);
};

export const updateUser = (userId, userData) => {
  return axios.put(`${API_BASE_URL}/${userId}`, userData);
};

export const deleteUser = (userId) => {
  return axios.delete(`${API_BASE_URL}/${userId}`);
};
