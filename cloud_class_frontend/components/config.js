import axios from "axios";

// 后端服务地址
export const URL = "http://localhost:8080";

// 创建 axios 实例，直接使用完整的后端地址
export const RealAxios = axios.create({
    baseURL: URL,
    timeout: 10000,
    withCredentials: true
});