import axios from "axios";

const api = axios.create({
    baseURL: 'https://localhost:44394',
})

export default api;