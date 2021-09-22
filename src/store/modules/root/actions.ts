import { ActionTree } from 'vuex';
import { ROOT_STORE } from '@/store/constants';
import { IRootState, IEmployeeData, IRootActionsTypes } from '@/store/interfaces';
import { sleepHelper } from '@/shared/misc';
/**
 * ROOT ACTIONS
 * @public ROOT ACTIONS
 * @typeParam IRootState - Root State
 * @typeParam RootActionsTypes - Root Actions
 */
export const actions: ActionTree<IRootState, IRootState> & IRootActionsTypes = {
	/**
	 * Set App Version
	 * 
	 * @param {Action} {commit} - action
	 * @param {String} payload - App Version
	 */
	[ROOT_STORE.ACTIONS.UPDATE_VERSION]({ commit }, payload: string) {
		commit(ROOT_STORE.MUTATIONS.SET_VERSION, payload);
	},
	/**
	 * Check if its Mobile Device or Not
	 * 
	 * @param {Action} {commit} - action
	 * @param {Boolean} payload - true/false
	 */
	[ROOT_STORE.ACTIONS.UPDATE_IS_MOBILE_DEVICE]({ commit }, payload: boolean) {
		commit(ROOT_STORE.MUTATIONS.SET_IS_MOBILE_DEVICE, payload);
	},
	/**
	 * Set Loading Status
	 * 
	 * @param {Action} {commit} - action
	 * @param {Boolean} payload - true/false
	 */
	[ROOT_STORE.ACTIONS.UPDATE_IS_LOADING]({ commit }, payload: boolean) {
		commit(ROOT_STORE.MUTATIONS.SET_IS_LOADING, payload);
	},
	/**
	 * Set Employee Count
	 * 
	 * @param {Action} {commit} - action
	 * @param {Number} payload - employee count
	 */
	[ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES_COUNT]({ commit }, payload: number) {
		commit(ROOT_STORE.MUTATIONS.SET_EMPLOYEES_COUNT, payload);
	},
	/**
	 * Set Employees List
	 * 
	 * @param {Action} {commit} - action
	 * @param {IEmployeeData[]} payload - Employee List
	 */
	[ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES]({ commit }, payload: Array<IEmployeeData>) {
		return new Promise(resolve => {
			commit(ROOT_STORE.MUTATIONS.SET_EMPLOYEES, payload);
			resolve(payload)
		})
	}
}
