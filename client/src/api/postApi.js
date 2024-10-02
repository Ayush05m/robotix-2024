import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/post';

export const getAllPosts = () => {
  return axios.get(`${API_BASE_URL}`);
};

export const createPost = (postData) => {
  return axios.post(`${API_BASE_URL}`, postData);
};

export const getPost = (postId) => {
  return axios.get(`${API_BASE_URL}/${postId}`);
};

export const updatePost = (postId, postData) => {
  return axios.put(`${API_BASE_URL}/${postId}`, postData);
};

export const deletePost = (postId) => {
  return axios.delete(`${API_BASE_URL}/${postId}`);
};

