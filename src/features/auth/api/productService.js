import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const searchService = async (id, Pname) => {
  try {
    const res = await axios.post(`${API_URL}/products`, { id, Pname });
    return res.data;
  } catch (err) {
    console.error("Search error:", err.response?.data || err.message);
    throw err;
  }
};

export const getProductService = async () => {
  try {
    const res = await axios.get(`${API_URL}/products`);
    return res.data;
  } catch (err) {
    console.error("Can't get product from DB:", err.response?.data || err.message);
    throw err;
  }
};
