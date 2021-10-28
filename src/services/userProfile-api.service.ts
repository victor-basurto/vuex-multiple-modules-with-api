import axios, {AxiosError, AxiosResponse } from 'axios';
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
	// async fetchUserProfile(model: ILoginCreds): Promise<AxiosResponse<IUserProfileResponse>> {
	// 	return await rootAPI.post<IUserProfileResponse>(`/account/login`, { ...model }).catch((error) => {
	// 		if (error.response && error.response.status === 401) {
	// 			return error;
	// 		} else {
	// 			console.log('no error');
	// 		// Handle error however you want
	// 		}
	// 	})
	// },
	
}
