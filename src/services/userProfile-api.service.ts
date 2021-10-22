import axios, { AxiosResponse } from 'axios';
import { IServerResponse } from '@/store/interfaces';
import { rootAPI } from './_rootApi';
import { IUserProfileResponse } from './use/useProfileApi';

export interface ILoginCreds {
	username: string;
	password: string;
}

export default {
	
	// async fetchEmployees(page: number = 1, perPage: number = 10): Promise<AxiosResponse<IServerResponse>> {
	// 	return await rootAPI.get<IServerResponse>(`/employees?pageNumber=${page}&pageSize=${perPage}`);
	// },
	async fetchUserProfile(model: ILoginCreds): Promise<AxiosResponse<IUserProfileResponse>> {
		return await rootAPI.post<IUserProfileResponse>(`/account/login`, { ...model })
	},
	
}
