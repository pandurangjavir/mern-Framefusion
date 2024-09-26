import axios from 'axios';

// Use the correct base URL depending on the environment.
const local_api = 'http://localhost:5000';
const production_api = 'https://your-production-url.com';  // Ensure you replace this with the correct production API URL.
const api_url = process.env.NODE_ENV === 'production' ? production_api : local_api;

// Get the token from localStorage (or set a default empty value if none exists).
const token = localStorage.getItem('canva_token');

// Create an Axios instance.
const api = axios.create({
  baseURL: api_url,  // Use `local_api` or `production_api` based on the environment.
  headers: {
    // Only include the Authorization header if there's a token.
    Authorization: token ? `Bearer ${token}` : '',
  },
  withCredentials: true,  // Ensure credentials (cookies, etc.) are sent with requests.
});

export default api;
