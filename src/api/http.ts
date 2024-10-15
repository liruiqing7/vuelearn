import { AxiosRequestConfig } from 'axios';
import axiosInstance, { ApiResponse } from 'api';

function get<T>(url: string, params?: object): Promise<ApiResponse<T>> {
	return axiosInstance.get(url, { params });
}

function post<T>(url: string, data?: object, config?: AxiosRequestConfig): Promise<ApiResponse<T>> {
	return axiosInstance.post(url, data, { ...config });
}

// const post = <T>(url: string, data?: {}, config?: AxiosRequestConfig): Promise<ApiResponse<T>> => {
// 	return axiosInstance.post(url, data, { ...config });
// };

export { get, post };
