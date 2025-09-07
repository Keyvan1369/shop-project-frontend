import axios from "axios";


export const loginService = async (email, password,role) => {
  try {
    const res = await axios.post("/api/login", {
      email,
      password,
      role
    });
    const data = res.data;
    console.log("res:",data);
    return data
     
  } catch (err) {
    console.error("Login error:", err.response?.data || err.message);
    throw err
  }
};

export const signupService = async (username, email, password,role) => {
  try {
    const res = await axios.post("/api/signup", {
      username,
      email,
      password,
      role
    });
    const data = res.data;
    console.log("res:",data);
    return data;

   
  } catch (err) {
    console.error("Signup error:", err.response?.data || err.message);
    throw err
  }
};
