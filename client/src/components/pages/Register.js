import React from "react";
import { useState } from "react";
import authService from "../redux/authService";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email);
    await authService.register({ name, email, password, password2 });
    navigate("/login");
  };

  return (
    <div className="container">
      <h3 align="center">Register</h3>
      <p align="center">Please create an account</p>
      <form onSubmit={onSubmit}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="registerName"
            className="form-control"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={onChange}
          />
          <label className="form-label" htmlFor="registerName">
            Name
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="email"
            id="registerEmail"
            className="form-control"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={onChange}
          />
          <label className="form-label" htmlFor="registerEmail">
            Email
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerPassword"
            className="form-control"
            name="password"
            value={password}
            placeholder="Enter a password"
            onChange={onChange}
          />
          <label className="form-label" htmlFor="registerPassword">
            Password
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="registerRepeatPassword"
            className="form-control"
            name="password2"
            value={password2}
            placeholder="Confirm password"
            onChange={onChange}
          />
          <label className="form-label" htmlFor="registerRepeatPassword">
            Repeat password
          </label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
        <div className="text-center">
          <p>
            Already a member? <a href="/login">Register</a>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
