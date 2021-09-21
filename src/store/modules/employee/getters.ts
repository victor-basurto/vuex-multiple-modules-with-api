import { GetterTree } from 'vuex';
import { EMPLOYEE_STORE } from '@/store/constants';
import {
	IEmployeeGetterTypes,
	EmployeeStateTypes,
	IRootState,
	IEmployeeData
} from '@/store/interfaces';

/**
 * Employee GETTERS
 * @public Employee Getters
 * @typeParam EmployeeStateTypes - Employee State
 * @typeParam IRootState - Root State
 * @typeParam IEmployeeGettersTypes - EmployeeGetters
 */
export const getters: GetterTree<EmployeeStateTypes, IRootState> & IEmployeeGetterTypes = {
	/**
	 * Returns rootDispatch
	 * 
	 * @param {EmployeeStateTypes} - Employee State
	 * @returns rootDispatch - true/false
	 */
	[EMPLOYEE_STORE.GETTERS.GET_ROOT_DISPATCH]: (state: EmployeeStateTypes): boolean => state.rootDispatch,
	/**
	 * Returns Employee Is Admin
	 * 
	 * @param {EmployeeStateTypes} - Employee State
	 * @returns boolean - true/false
	 */
	[EMPLOYEE_STORE.GETTERS.EMPLOYEE_IS_ADMIN]: (state: EmployeeStateTypes): boolean => state.isAdmin,
	 /**
	 * Returns Employee 
	 * 
	 * @param {EmployeeStateTypes} - Employee State
	 * @returns boolean - true/false
	 */
	[EMPLOYEE_STORE.GETTERS.EMPLOYEE_IS_ACTIVE]: (state: EmployeeStateTypes): boolean => state.isActive,
	  /**
	 * Returns Employee Object
	 * 
	 * @param {EmployeeStateTypes} - Employee State
	 * @returns Employee - object
	 */
	[EMPLOYEE_STORE.GETTERS.EMPLOYEE_BY_ID]: (state: EmployeeStateTypes): IEmployeeData => state.employee,
}
