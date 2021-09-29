import { toRefs, reactive } from 'vue';
import { AxiosResponse } from 'axios';
import employeesApiService from '../employees-api.service';
import { IEmployeeData, IServerResponse } from '@/store/interfaces';

// move to global Interfaces?
interface IServerResponseState extends IServerResponse {
	fetching: boolean;
}

export default function () {
	const serverResponseState = reactive<IServerResponseState>({
		success: 0,
		message: '',
		data: [] as Array<IEmployeeData>,
		fetching: false
	});
	/**
	 * fetchData will feed `serverResponseState`
	 * initializing Employees List and Server Response status
	 */
	const fetchData = async (): Promise<void> => {
		serverResponseState.fetching = true;
		try {
			const { data: {data, message, success} }: AxiosResponse<IServerResponse> = await employeesApiService.fetchEmployees();
			serverResponseState.message = message;
			serverResponseState.success = success;;
			serverResponseState.data = data;
		} catch (error) {
			throw error;
		} finally {
			serverResponseState.fetching = false;
		}
	}

	// watch(serverResponseState, fetchData)
	return {
		...toRefs(serverResponseState),
		fetchData
	}
}
