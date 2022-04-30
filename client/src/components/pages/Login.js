import React, { useState } from "react";
import authService from "../redux/authService";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};
const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState(initialState);
  const { email, password } = formValue;

  const onInputChange = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    await authService.login({ email, password });
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="container">
      <h3 align="center">Sign In</h3>
      <p align="center">Please sign into your account</p>
      <form onSubmit={onSubmit}>
        <div class="form-outline mb-4">
          <input
            type="email"
            id="form2Example1"
            class="form-control"
            name="email"
            value={email}
            onChange={onInputChange}
            placeholder="Enter your email"
          />
          <label class="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div class="form-outline mb-4">
          <input
            type="password"
            id="form2Example2"
            class="form-control"
            name="password"
            value={password}
            onChange={onInputChange}
            placeholder="Enter your password"
          />
          <label class="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>
        <button type="submit" class="btn btn-primary btn-block mb-4">
          Sign in
        </button>
        <div class="text-center">
          <p>
            Not a member? <a href="/register">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
