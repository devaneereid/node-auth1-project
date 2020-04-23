import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://localhost:5000",
            withCredentials: true,
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;

