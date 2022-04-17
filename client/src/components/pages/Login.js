import React, { useState, useEffect } from 'react';

const initialState= {
    email:"",
    password:""
}
const Login = () => {
    const [formValue, setFormValue] = useState(initialState);
    const {email, password} = formValue;
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const onInputChange = (e) => {
        let {name, value} = e.target;
        setFormValue({ ...formValue, [name]: value})
    };

    return (
        <div class="container">
            <h3 align="center">Sign In</h3>
            <p align="center">Please sign into your account</p>
            <form onSubmit={handleSubmit}>
            <div class="form-outline mb-4">
                <input type="email" id="form2Example1" class="form-control" name="email" value={email} onChange={onInputChange} placeholder="Enter your email"/>
                <label class="form-label" for="form2Example1">Email address</label>
            </div>

            <div class="form-outline mb-4">
                <input type="password" id="form2Example2" class="form-control" name="password" value={password} onChange={onInputChange} placeholder="Enter your password"/>
                <label class="form-label" for="form2Example2">Password</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
            <div class="text-center">
                <p>Not a member? <a href="/register">Register</a></p>
            </div>
            </form>
        </div>
    );
}

export default Login;