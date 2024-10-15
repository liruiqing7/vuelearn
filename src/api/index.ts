import axios from 'axios';
import type { AxiosError, AxiosInstance, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
// import { getIn } from 'utils/helper';
import { CookieCache } from '../utils/caches';
import { getIn } from '../utils/helper';

const BASE_URL = '/hubble/web';

export interface ApiResponse<T> {
	code: number;
	data: T;
	msg: string;
}

const API: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 30 * 1000
});

// 请求拦截
API.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		const sessionId = CookieCache.get('sessionId') || '';
		config.headers['sessionId'] = sessionId;
		return config;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

// 响应拦截
API.interceptors.response.use(
	(response: AxiosResponse) => {
		const { data } = response;

		if (data.code !== 0 || typeof response.data !== 'object') {
			const msg = getIn(['msg'], data, '接口请求失败');
			ElMessage.error(msg);
			console.error(response, 'response');
		}

		return response;
	},
	(error: AxiosError) => {
		return Promise.reject(error);
	}
);

export default API;
