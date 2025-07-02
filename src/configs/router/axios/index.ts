import axios from "axios";

const api = axios.create({
  baseURL: 'https://backend.freecourses.com.ua/api/',
});

export default api