import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000", // 백엔드 서버 주소로 변경하세요
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});
