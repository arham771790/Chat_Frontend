import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://chat-backend-h7p4.onrender.com/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

export default instance;
