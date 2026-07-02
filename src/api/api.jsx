import axios from "axios";

const api = axios.create({
  baseURL: "https://vercel.com/kiran-s-projects19/fixmycity-backend", 
});

export default api;