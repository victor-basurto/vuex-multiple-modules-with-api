import { ActionTree } from 'vuex';
import { ROOT_STORE } from '@/store/constants';
import { IRootState, IEmployeeData, IRootActionsTypes } from '@/store/interfaces';
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
	},
	/**
	 * TODO: 
	 * 	Add Comments to methods below
	 */
	[ROOT_STORE.ACTIONS.UPDATE_SHOW_CREATE_MODAL]({ commit }, payload: boolean) {
		commit(ROOT_STORE.MUTATIONS.SET_SHOW_CREATE_MODAL, payload);
	},
	[ROOT_STORE.ACTIONS.UPDATE_EDIT_MODAL]({ commit }, payload: {showModal: true, id: number}) {
		commit(ROOT_STORE.MUTATIONS.SET_EDIT_MODAL, payload)
	},
	[ROOT_STORE.ACTIONS.UPDATE_MODAL]({ commit }, payload: boolean) {
		commit(ROOT_STORE.MUTATIONS.SET_MODAL, payload);
	},
	[ROOT_STORE.ACTIONS.UPDATE_LIGHT_DARK_MODE]({ commit }, payload: boolean) {
		commit(ROOT_STORE.MUTATIONS.SET_LIGHT_DARK_MODE, payload);
	},
}
