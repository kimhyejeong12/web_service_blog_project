import axios from "axios";
import { useAuthStore } from "../stores/useAuthStore";

export const axiosInstance = axios.create({
    // baseURL: "http://localhost:3000",
    baseURL: "http://113.198.66.75:13122", // JCloud 배포 시 변경
    withCredentials: true,
});

// Request interceptor - 요청 시 Access Token을 헤더에 추가
axiosInstance.interceptors.request.use((config) => {
    const accessToken = useAuthStore.getState().accessToken;
    if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
});
