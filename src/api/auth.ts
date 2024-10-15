import API from '../api/index';
import { LoginParams } from './interface';

const auth = '/auth';

export function login(params: LoginParams) {
	API.post(`${auth}/login`, params);
}
