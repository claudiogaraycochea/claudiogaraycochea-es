import axios from 'axios';

import { API_URL } from '../store/Constants';

export const ContentTypes = {
	json: 'application/json',
	formData: 'multiplart/form-data',
	html: 'text/html',
};

// More info: https://github.com/axios/axios
export function request(method, endpoint, data = {}, headers = { 'content-type': ContentTypes.json }, other) {
	const url = `${API_URL}${endpoint}`;
	const options = {
		method,
		url,
		data,
		headers,
		...other,
	};
	return axios(options);
}
