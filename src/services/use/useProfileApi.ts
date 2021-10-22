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
		status: 401
	});

	const fetchUser = async (req: ILoginCreds): Promise<void> => {
		serverResponseState.fetching = true;
		try {
			const {data: {token, username, message}}: AxiosResponse<IUserProfileResponse> = await profileApiService.fetchUserProfile(req);
			serverResponseState.token = token;
			serverResponseState.username = username;
			console.log('submitted: ', username)
		} catch(error) {
			const err = error as AxiosError;
			serverResponseState.status = err.response?.status
			console.log('error couldnt login: ', err.request)
		} finally {
			serverResponseState.fetching = false;
		}
	}
	return {
		...toRefs(serverResponseState),
		fetchUser
	}
}

