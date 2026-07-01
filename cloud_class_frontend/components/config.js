import axios from "axios";

// 后端服务地址
export const URL = "http://localhost:8080";

export const RealAxios = axios.create({
    baseURL: URL,
    timeout: 30000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

// 请求拦截器
RealAxios.interceptors.request.use(
    config => {
        console.log('[请求]', config.method?.toUpperCase(), config.url, config.data || '');
        return config;
    },
    error => Promise.reject(error)
);

// 响应拦截器
RealAxios.interceptors.response.use(
    response => {
        console.log('[响应]', response.config.url, response.data);
        return response;
    },
    error => {
        console.error('[请求失败]', error.config?.url, error.message);
        if (error.response) {
            console.error('状态码:', error.response.status);
            console.error('响应数据:', error.response.data);
        }
        return Promise.reject(error);
    }
);