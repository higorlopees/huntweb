import axios from 'axios';

 const api = axios.create({ baseURL: 'https://higorlopees-nodejs-api.herokuapp.com/api' });

export default api;