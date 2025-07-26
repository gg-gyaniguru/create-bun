import axios from 'axios';

const {VITE_SERVER} = import.meta.env;

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:9060/api',
    baseURL: `http://${VITE_SERVER}:9060/api`,
});

export default axiosInstance;