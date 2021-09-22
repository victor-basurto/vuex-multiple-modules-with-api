import axios, { AxiosResponse } from 'axios';
import { IServerResponse } from '@/store/interfaces';

const rootAPI = axios.create({
	baseURL: process.env.VUE_APP_API_URL_WINDOWS,
	withCredentials: false,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': true
	},
	timeout: 10000
});

export default {
	// async fetchEmployees(page: number = 1, perPage: number = 10): Promise<AxiosResponse<IServerResponse>> {
	// 	return await rootAPI.get<IServerResponse>(`/employees?pageNumber=${page}&pageSize=${perPage}`);
	// },
	async fetchEmployees(): Promise<AxiosResponse> {
		return await rootAPI.get<IServerResponse>(`/client`);
	},
	async fetchEmployeeById(id: number): Promise<AxiosResponse> {
		return await rootAPI.get<IServerResponse>(`/employeess/${id}`);
	}
}
