import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const contactService = async (email, subject, message) => {
  try {
    const res = await axios.post(`${API_URL}/contacts`, {
      email,
      subject,
      message,
    });
    const data = res.data;
    console.log(data);
    return data;
  } catch (error) {
    console.error("contact error:", error.response?.data || error.message);
    throw error;
  }
};
