import axios from "axios";

const userName = import.meta.env.VITE_FIVETRAN_API_KEY;
const password = import.meta.env.VITE_FIVETRAN_API_SECRET;
const token = import.meta.env.VITE_FIVETRAN_API_ENCODED;

const axiosInstance = axios.create({
    baseURL: "https://api.fivetran.com/v1",
});

axiosInstance.interceptors.request.use((req) => {
    req.auth = {
        username: userName,
        password: password,
    };

    return req;
});
axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
export default axiosInstance;
