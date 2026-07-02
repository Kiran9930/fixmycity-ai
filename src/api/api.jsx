import axios from "axios";

const api = axios.create({
  baseURL: "https://fixmycity-backend-your-link.vercel.app", 
});

export default api;