import axios, { AxiosError, AxiosResponse } from 'axios';

export const rootAPI = axios.create({
	baseURL: process.env.VUE_APP_API_URL_MAC,
	withCredentials: false,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		'Access-Control-Allow-Origin': true
	},
	timeout: 10000
});
/**
 * 	Uncomment Code below if planning to use Interceptors
 */
// /**
//  * Response interceptor
//  * 
//  * @param {AxiosReponse} response - { config, data, headers, request, status, statusText }
//  * @returns Promise<AxiosReponse>
//  */
// const responseInterceptor = (response: AxiosResponse): Promise<AxiosResponse> => {
// 	console.log('response')
// 	console.log(response)
// 	return Promise.resolve(response)
// }
// /**
//  * 
//  * @param error 
//  * @returns 
//  */
// const errorInterceptor = (error: AxiosError): Promise<AxiosError> => {
// 	console.log(error)
// 	if (!error.response) {
// 		//notify.warn('Network/Server error');
// 		console.warn('**Network/Server error');
// 		return Promise.reject(error);
// 	}
// 	// all the other error responses
// 	switch (error.response.status) {
// 		case 400:
// 			console.log(error.response.status, error.message);
// 			console.warn('Nothing to display', 'Data Not Found');
// 			break;

// 		case 401: // authentication error, logout the user
// 			//notify.warn('Please login again', 'Session Expired');
// 			console.log(error.response.status, error.message);
// 			// localStorage.removeItem('token');
// 			// localStorage.removeItem('user');
// 			//router.push('/auth');
// 			break;

// 		default:
// 			console.log(error.response.status, error.message);
// 			//notify.error('Server Error');
// 	}
// 	return Promise.reject(error);
// }

// rootAPI.interceptors.response.use(responseInterceptor, errorInterceptor);
