import { reactive, toRefs } from 'vue';
import { AxiosError, AxiosResponse } from 'axios';
import profileApiService, { ILoginCreds } from '../userProfile-api.service';

export interface IUserProfileResponseState extends IUserProfileResponse {
	fetching: boolean;
	status: number | undefined;
}
export interface IUserProfileResponse  {
	token?: string | null | undefined;
	message?: string | null;
	username: string;
}

export default function() {
	const serverResponseState = reactive<IUserProfileResponseState>({
		token: null,
		username: '',
		fetching: false,
		status: 200,
	});

	const fetchUser = async (req: ILoginCreds): Promise<void> => {
		serverResponseState.fetching = true;
		try {
			const {data: {token, username}}: AxiosResponse<IUserProfileResponse> = await profileApiService.fetchUserProfile(req);
			serverResponseState.token = token;
			serverResponseState.username = username;
			// console.log('submitted: ', username)
		} catch(error) {
			const  { response } = error as AxiosError;

			serverResponseState.status = response?.status;
			serverResponseState.message = response?.data;
		} finally {
			serverResponseState.fetching = false;
		}
	} 
	const unfetchUser = async (): Promise<void> => {
		serverResponseState.fetching = true;
		try {
			serverResponseState.message = 'logged out';
			serverResponseState.username = '';
			serverResponseState.token = null;
			serverResponseState.status = 200;
		} catch(error) {
			serverResponseState.message = error as string;
		} finally {                                                                                                                                                                  
			serverResponseState.fetching = false;
		};
	}
	return {
		...toRefs(serverResponseState),
		fetchUser
	}
}

