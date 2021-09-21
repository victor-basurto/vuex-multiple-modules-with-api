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

/**
 * Merge all State from Exposed Modules
 */
export interface IMergedState extends IRootState {
	employeeModule: EmployeeStateTypes;
}

/**
 * ROOT GETTERS
 */
 export interface IRootGettersTypes {
	[ROOT_STORE.GETTERS.IS_MOBILE_DEVICE](state: IRootState): boolean;
	[ROOT_STORE.GETTERS.UPDATED_VERSION](state: IRootState): string;
	[ROOT_STORE.GETTERS.IS_LOADING](state: IRootState): boolean;
	[ROOT_STORE.GETTERS.EMPLOYEES_COUNT](state: IRootState): number;
	[ROOT_STORE.GETTERS.EMPLOYEES](state: IRootState): IEmployeeData[];
}
/**
 * ROOT MUTATIONS `TYPE`
 */
export type RootMutationsTypes<S = IRootState> = {
	[ROOT_STORE.MUTATIONS.SET_IS_MOBILE_DEVICE](state: S, payload: boolean): void;
	[ROOT_STORE.MUTATIONS.SET_VERSION](state: S, payload: string): void;
	[ROOT_STORE.MUTATIONS.SET_IS_LOADING](state: S, payload: boolean): void;
	[ROOT_STORE.MUTATIONS.SET_EMPLOYEES_COUNT](state: S, payload: number): void;
	[ROOT_STORE.MUTATIONS.SET_EMPLOYEES](state: S, payload: IEmployeeData[]): void;
}
/**
 * AugmentedActionContext for ROOT definition
 */
 type AugmentedActionContextRoot = {
	commit<K extends keyof RootMutationsTypes>(
		key: K,
		payload: Parameters<RootMutationsTypes[K]>[1]
	): ReturnType<RootMutationsTypes[K]>;
} & Omit<ActionContext<IRootState, IRootState>, 'commit'> & {
	dispatch<K extends keyof StoreActions>(
		key: K,
		payload?: Parameters<StoreActions[K]>[1],
		options?: DispatchOptions
	): ReturnType<StoreActions[K]>;
};
/**
 * ROOT Actions `TYPE`
 */
export interface IRootActionsTypes {
	[ROOT_STORE.ACTIONS.UPDATE_VERSION]({ commit }: AugmentedActionContextRoot, payload: string): void;
	[ROOT_STORE.ACTIONS.UPDATE_IS_MOBILE_DEVICE]({ commit }: AugmentedActionContextRoot, payload: boolean): void;
	[ROOT_STORE.ACTIONS.UPDATE_IS_LOADING]({ commit }: AugmentedActionContextRoot, payload: boolean): void;
	[ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES_COUNT]({ commit }: AugmentedActionContextRoot, payload: number): void;
	[ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES]({ commit }: AugmentedActionContextRoot, payload: IEmployeeData[]): void;
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
/**
 * EMPLOYEE MUTATIONS
 */
export interface IEmployeeGetterTypes {
	[EMPLOYEE_STORE.GETTERS.GET_ROOT_DISPATCH](state: EmployeeStateTypes): boolean;
	[EMPLOYEE_STORE.GETTERS.EMPLOYEE_IS_ACTIVE](state: EmployeeStateTypes): boolean;
	[EMPLOYEE_STORE.GETTERS.EMPLOYEE_IS_ADMIN](state: EmployeeStateTypes): boolean;
	[EMPLOYEE_STORE.GETTERS.EMPLOYEE_BY_ID](state: EmployeeStateTypes): IEmployeeData;
}
/**
 * EMPLOYEE MUTATIONS `TYPE`
 */
export type EmployeeMutationsType<S = EmployeeStateTypes> = {
	[EMPLOYEE_STORE.MUTATIONS.SET_ROOT_DISPATCH](state: S, payload?: boolean): void;
	[EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_IS_ACTIVE](state: S, payload: boolean): void;
	[EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_IS_ADMIN](state: S, payload: boolean): void;
	[EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_BY_ID](state: S, payload: IEmployeeData): void;
}
/**
 * AugmentedActionContext for EMPLOYEE definition
 */
export type AugmentedActionContextEmployee = {
	commit<K extends keyof EmployeeMutationsType>(
		key: K,
		payload: Parameters<EmployeeMutationsType[K]>[1]
	): ReturnType<EmployeeMutationsType[K]>;
} & Omit<ActionContext<EmployeeStateTypes, IRootState>, 'commit'>;
/**
 * EMPLOYEES Actions `TYPE`
 */
export interface IEmployeeActionsTypes {
	[EMPLOYEE_STORE.ACTIONS.UPDATE_ROOT_DISPATCH]({ commit }: AugmentedActionContextEmployee, payload: boolean): void;
	[EMPLOYEE_STORE.ACTIONS.UPDATE_EMPLOYEE_IS_ACTIVE]({ commit }: AugmentedActionContextEmployee, payload: boolean): void;
	[EMPLOYEE_STORE.ACTIONS.UPDATE_EMPLOYEE_IS_ADMIN]({ commit }: AugmentedActionContextEmployee, payload: boolean): void;
	[EMPLOYEE_STORE.ACTIONS.UPDATE_EMPLOYEE_BY_ID]({ commit }: AugmentedActionContextEmployee, payload: IEmployeeData): void;
}


/**
 * Wrap Actions and Getters from Modules
 * into `StoreActions` and `StoreGetters`
 */
export interface StoreActions
	extends IRootActionsTypes,
		IEmployeeActionsTypes {}
export interface StoreGetters
	extends IRootGettersTypes,
		IEmployeeGetterTypes {}
