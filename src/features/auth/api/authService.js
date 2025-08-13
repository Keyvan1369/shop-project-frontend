import axios from "axios";
import React from "react";

export const loginService = async (email, password) => {
    try{
  const res = await axios.post("https://www.apirequest.in/user/api/login", {
    email,
    password,
  });
  const data = res.data
  console.log(data);
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
};
}

export const signupService = async (name,email, password) => {
    try{
  const res = await axios.post("https://www.apirequest.in/user/api/", {
    name,
    email,
    password,
  });
  const data = res.data
  console.log(data);
  } catch (err) {
    console.error("Signup error:", err.response?.data || err.message);
  }
}
