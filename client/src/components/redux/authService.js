import axios from 'axios';
const API = axios.create({baseUrl: "http://localhost:5000"});

const register = async (userData) => {
    const response = await API.post('/user/login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const authService = {
    register
}

export default authService;