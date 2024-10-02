import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/comment';

export const createComment = (commentData) => {
  return axios.post(`${API_BASE_URL}`, commentData);
};

export const getCommentsForPost = (postId) => {
  return axios.get(`${API_BASE_URL}/post/${postId}`);
};

export const likeComment = (commentId) => {
  return axios.put(`${API_BASE_URL}/${commentId}/like`);
};

export const editComment = (commentId, commentData) => {
  return axios.put(`${API_BASE_URL}/${commentId}`, commentData);
};

export const deleteComment = (commentId) => {
  return axios.delete(`${API_BASE_URL}/${commentId}`);
};
