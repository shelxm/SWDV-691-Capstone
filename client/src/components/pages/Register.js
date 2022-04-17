import React from 'react';
import { useState, useEffect } from 'react';

const Register = () => {
    const [formData, setFormData] = useState({
        name:'',
        email: '',
        password: '',
        password2:'',
    })

    const { name, email, password, password2 }= formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div class="container">
            <h3 align="center">Register</h3>
            <p align="center">Please create an account</p>
            <form onSubmit = {onSubmit}>
            <div class="form-outline mb-4">
                <input type="text" id="registerName" class="form-control" name="name" value={name} placeholder='Enter your name' onChange={onChange}/>
                <label class="form-label" for="registerName">Name</label>
            </div>

            <div class="form-outline mb-4">
                <input type="email" id="registerEmail" class="form-control" name="email" value={email} placeholder='Enter your email' onChange={onChange}/>
                <label class="form-label" for="registerEmail">Email</label>
            </div>

            <div class="form-outline mb-4">
                <input type="password" id="registerPassword" class="form-control" name="password" value={password} placeholder='Enter a password' onChange={onChange}/>
                <label class="form-label" for="registerPassword">Password</label>
            </div>

            <div class="form-outline mb-4">
                <input type="password" id="registerRepeatPassword" class="form-control" name="password2" value={password2} placeholder='Confirm password' onChange={onChange}/>
                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
            </div>
            <button type="submit" class="btn btn-primary btn-block mb-4">Sign in</button>
            <div class="text-center">
                <p>Already a member? <a href="/login">Login</a></p>
            </div>
            </form>
        </div>
    );
}

export default Register;