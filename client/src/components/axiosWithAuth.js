import axios from 'axios';

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localHost:5000/api', 
        headers: {
            'Content-type' : 'application/json',
            'Authorization': token,
        },
    });
};