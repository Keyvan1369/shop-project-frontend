import axios from "axios";


export const searchService = async (id, Pname) => {
  try {
    const res = await axios.post("/api/products  ", {      
      id,
      Pname,
    }); 
    const data = res.data;
    console.log(data);
    return data;
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    throw err
  }
};
export const getProductService = async (id, Pname) => {
  try {
    const res = await axios.get("/api/products  "     
      ); 
    const data = res.data;
    
    return data;
  } catch (err) {
    console.error("can't get product from DB:", err.response?.data || err.message);
    throw err
  }
};
