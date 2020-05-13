import axios from "axios";
const newAxios = axios.create({
  baseURL: process.env.DB_EYEDENTITY_SERVER,
  Headers: { token: localStorage.getItem("token") },
});

export default newAxios;
