import axios from 'axios';

const local_api = 'http://localhost:5000';
const production_api = '';  // Ensure you replace this with the correct production API URL.
const token = localStorage.getItem('canva_token');

const api = axios.create({
  baseURL: local_api,  // Change this to `production_api` in production environment.
  headers: {
    Authorization: token ? `Bearer ${token}` : '',
  },
  withCredentials: true,
});

export default api;
