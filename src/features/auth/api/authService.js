import axios from "axios";
import React from "react";

export const loginService = async (email, password) => {
  const res = await axios.post("https://www.apirequest.in/user/api/login", {
    email,
    password,
  });
  const data = res.data
  console.log(data);
  
};
