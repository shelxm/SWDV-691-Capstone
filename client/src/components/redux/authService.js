import axios from "axios";
const API = "https://ftnearby.herokuapp.com/user/";

const register = async (userData) => {
  const response = await axios.post(API + "register", userData);

  console.log(response.data);
  return response.data;
};

const login = async (userData) => {
  const response = await axios.post(API + "login", userData);
  console.log(response.data);
  if (response.data) {
    window.localStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

const logout = () => {
  localStorage.clear("user");
  window.location.reload(false);
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
