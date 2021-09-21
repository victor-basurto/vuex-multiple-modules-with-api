import { ActionContext, DispatchOptions } from 'vuex';
import { ROOT_STORE, EMPLOYEE_STORE } from './constants';
/**
 * ROOT interface
 * TODO: 
 * 	Move to its own file
 */
export interface IRootState {
	root: boolean;
	loading: boolean;
	employees: IEmployeeData[];
	employeesCount: number;
	version: string;
	isMobile: boolean;
}
/**
 * SERVER RESPONSE interface
 * TODO: 
 * 	Move to its own file
 */
export interface IServerResponse {
	success: number;
	message: string;
	response: IEmployeeData
}
/**
 * EMPLOYEE interface
 * TODO: 
 * 	Move to its own file
 */
export interface IEmployeeData {
	id: number;
	firstName: string;
	lastName: string;
	isActive: string;
	isAdmin: string;
}



/********************* EMPLOYEE MODULE TYPES **************************/
/**
 * EMPLOYEE StateTypes
 */
export interface EmployeeStateTypes {
	employee: IEmployeeData,
	isActive: boolean;
	isAdmin: boolean;
	rootDispatch: boolean;
}
