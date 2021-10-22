import axios from 'axios';

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
// axios.interceptors.request.use(config => {
// 	// perform a task before the request is sent
// 	console.log('Request was sent');
  
// 	return config;
//   }, error => {
// 	// handle the error
// 	return Promise.reject(error);
//   });
