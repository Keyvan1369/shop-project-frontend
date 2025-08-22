import axios from "axios";
import React from "react";

export const searchService = async (id, Pname) => {
  try {
    const res = await axios.post("/api/products  ", {      //add endpoint
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
