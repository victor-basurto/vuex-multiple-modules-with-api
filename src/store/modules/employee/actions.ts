import { ActionTree } from 'vuex';
import { EMPLOYEE_STORE } from '@/store/constants';
import {
	EmployeeStateTypes,
	IEmployeeActionsTypes,
	IRootState,
	IEmployeeData
} from '@/store/interfaces';
import { sleepHelper } from '@/shared/misc';

/**
 * EMPLOYEE ACTIONS
 * @public EMPLOYEE ACTIONS
 * @typeParam EmployeeStateTypes - EMPLOYEE STATE
 * @typeParam IRootState - Root State
 * @typeParam IEmployeeActionsTypes - Employee Actions
 */
export const actions: ActionTree<EmployeeStateTypes, IRootState> & IEmployeeActionsTypes = {
	/**
	 * Sets Root Dispatch to True/False
	 * 
	 * @param {Objec<Action>} {commit} - action
	 * @param {Boolean} payload - true/false
	 */
	[EMPLOYEE_STORE.ACTIONS.UPDATE_ROOT_DISPATCH]({ commit }, payload: boolean) {
		commit(EMPLOYEE_STORE.MUTATIONS.SET_ROOT_DISPATCH, payload);
	},
	/**
	 * Sets Employee Active Status
	 * 
	 * @param {Objec<Action>} {commit} - action
	 * @param {Boolean} payload - true/false
	 * @returns Promise<Boolean> - true/false
	 */
	[EMPLOYEE_STORE.ACTIONS.UPDATE_EMPLOYEE_IS_ACTIVE]({ commit }, payload: boolean) {
		return new Promise(resolve => {
			sleepHelper(1000);
			commit(EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_IS_ACTIVE, payload);
			resolve(payload);
		});
	},
	/**
	 * Sets Employee Admin Status
	 * 
	 * @param {Objec<Action>} {commit} - action
	 * @param {Boolean} payload - true/false
	 * @returns Promise<Boolean> - true/false
	 */
	[EMPLOYEE_STORE.ACTIONS.UPDATE_EMPLOYEE_IS_ADMIN]({ commit }, payload: boolean) {
		return new Promise(resolve => {
			sleepHelper(1000);
			commit(EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_IS_ADMIN, payload);
			resolve(payload);
		});
	},
	/**
	 * Sets Employee
	 * 
	 * @param {Objec<Action>} {commit} - action
	 * @param {Boolean} payload - true/false
	 * @returns Promise<Boolean> - true/false
	 */
	 [EMPLOYEE_STORE.ACTIONS.UPDATE_EMPLOYEE_BY_ID]({ commit }, payload: IEmployeeData) {
		return new Promise(resolve => {
			sleepHelper(1000);
			commit(EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_BY_ID, payload);
			resolve(payload);
		});
	}
}
