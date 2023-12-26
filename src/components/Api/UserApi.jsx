// UserApi.js
import axios from 'axios';

const BASE_URL = 'https://api.escuelajs.co/api/v1/users';

export const getAllUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getSingleUser = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await axios.put(`${BASE_URL}/${id}`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const checkEmailAvailability = async (email) => {
  try {
    const response = await axios.post(`${BASE_URL}/is-available`, { email });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
