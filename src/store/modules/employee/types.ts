import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import {
	EmployeeStateTypes,
	EmployeeMutationsType,
	IEmployeeGetterTypes,
	IEmployeeActionsTypes
} from '@/store/interfaces';

/**
 * Employees Store Module Types Definition - useful for managing Employee State
 */
export type EmployeeStoreModuleTypes<S = EmployeeStateTypes> = Omit<
	VuexStore<S>,
	'commit' | 'getters' | 'dispatch'
> & {
	commit<
		K extends keyof EmployeeMutationsType,
		P extends Parameters<EmployeeMutationsType[K]>[1]
	>(
		key: K,
		payload?: P,
		options?: CommitOptions
	): ReturnType<EmployeeMutationsType[K]>;
} & {
	getters: {
		[K in keyof IEmployeeGetterTypes]: ReturnType<IEmployeeGetterTypes[K]>;
	}
} & {
	dispatch<K extends keyof IEmployeeActionsTypes>(
		key: K,
		payload?: Parameters<IEmployeeActionsTypes[K]>[1],
		options?: DispatchOptions
	): ReturnType<IEmployeeActionsTypes[K]>;
};
