import axios from "axios";

const api = axios.create({
  baseURL: "https://fixmycity-backend.vercel.app", 
});

export default api;