import axiosClient from "./axiosClient";

const zingApi = {
    searchAll: (query) => {
        return axiosClient.get(`/search?q=${query}`);
    },
};

export default zingApi;
