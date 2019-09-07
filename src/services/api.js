import axios from 'axios';

const api = axios.create({
  baseURL: 'http://virtserver.swaggerhub.com/fbidu/scool/1.0.0'
  // baseURL: 'http://5af8e286.ngrok.io'
});

export default api;