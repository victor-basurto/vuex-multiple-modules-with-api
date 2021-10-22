import axios, { AxiosResponse } from 'axios';
import { IServerResponse } from '@/store/interfaces';
import { rootAPI } from './_rootApi';

export default {
	// async fetchEmployees(page: number = 1, perPage: number = 10): Promise<AxiosResponse<IServerResponse>> {
	// 	return await rootAPI.get<IServerResponse>(`/employees?pageNumber=${page}&pageSize=${perPage}`);
	// },
	async fetchEmployees(): Promise<AxiosResponse<IServerResponse>> {
		return await rootAPI.get<IServerResponse>(`/employees`);
	},
	async fetchEmployeeById(id: number): Promise<AxiosResponse> {
		return await rootAPI.get<IServerResponse>(`/employeess/${id}`);
	}
}
