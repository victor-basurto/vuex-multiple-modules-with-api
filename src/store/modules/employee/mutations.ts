import { MutationTree } from 'vuex';
import { EMPLOYEE_STORE } from '@/store/constants';
import {
	EmployeeMutationsType,
	EmployeeStateTypes,
	IEmployeeData
} from '@/store/interfaces';

/**
 * Employee MUTATIONS
 * @public Employee Mutations
 * @typeParam EmployeeStateTypes - Employee State
 * @typeParam IEmployeeMutationsTypes - EmployeeMutations
 */
export const mutations: MutationTree<EmployeeStateTypes> & EmployeeMutationsType = {
	/**
	 * Updates Employee `Active Status`
	 * 
	 * @param {EmployeeStateTypes} - Employee State
	 * @param {Boolean} payload - true/false
	 */
	[EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_IS_ACTIVE](state: EmployeeStateTypes, payload: boolean) { state.isActive = payload; },
	/**
	 * Updates Employee `Admin Status`
	 * 
	 * @param {EmployeeStateTypes} - Employee State
	 * @param {Boolean} payload - true/false
	 */
	[EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_IS_ADMIN](state: EmployeeStateTypes, payload: boolean) { state.isAdmin = payload; },
	/**
	 * Updates Root Dispatch from Child Component
	 * 
	 * @param {EmployeeStateTypes} - Employee State
	 * @param {Boolean} payload - true/false
	 */
	[EMPLOYEE_STORE.MUTATIONS.SET_ROOT_DISPATCH](state: EmployeeStateTypes, payload: boolean) { state.rootDispatch = payload; },
	/**
	 * Updates Employee
	 * 
	 * @param {EmployeeStateTypes} - Employee State
	 * @param {IEmployeeData} payload - current Employee
	 */
	[EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_BY_ID](state: EmployeeStateTypes, payload: IEmployeeData) { state.employee = payload; },
}
