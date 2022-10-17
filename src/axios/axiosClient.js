import axios from "axios";

const axiosClient = axios.create({
    baseURL: "http://zing-api-007.herokuapp.com/api",
    headers: {
        "content-type": "application/json",
    },
});

axiosClient.interceptors.request.use(async (config) => {
    // Handle token here ...
    return config;
});
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data;
    }
    return response;
});

export default axiosClient;
