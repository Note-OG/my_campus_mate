import axios from 'axios';

// Create AXIOS INSTANCE
// SET THE SERVER URL
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default api;
