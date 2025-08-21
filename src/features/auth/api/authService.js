import axios from "axios";
import React from "react";

export const loginService = async (email, password) => {
  try {
    const res = await axios.post("/api/login", {
      email,
      password,
    });
    const data = res.data;
    console.log(data);
    return data;
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    throw err
  }
};

export const signupService = async (username, email, password) => {
  try {
    const res = await axios.post("/api/signup", {
      username,
      email,
      password,
    });
    const data = res.data;
    console.log("res:",data);
    return data;

   
  } catch (err) {
    console.error("Signup error:", err.response?.data || err.message);
    throw err
  }
};
