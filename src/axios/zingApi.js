import axiosClient from "./axiosClient";

const zingApi = {
    searchAll: (query) => {
        return axiosClient.get(`/search?q=${query}`);
    },
    getHome: () => {
        return axiosClient.get("/home");
    },
};

export default zingApi;
