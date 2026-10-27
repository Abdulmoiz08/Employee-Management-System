import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6adf994d8e42963c8d5e3586.mockapi.io/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export default api;