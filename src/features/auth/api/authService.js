import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const loginService = async (email, password, role) => {
  const res = await axios.post(`${API_URL}/login`, { email, password, role });
  return res.data;
};

export const signupService = async (username, email, password, role) => {
  const res = await axios.post(`${API_URL}/signup`, { username, email, password, role });
  return res.data;
};
