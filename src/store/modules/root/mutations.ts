import { MutationTree } from 'vuex';
import { ROOT_STORE } from '@/store/constants';
import { RootMutationsTypes, IRootState, IEmployeeData, DarkModeColorTypes } from '@/store/interfaces';

/**
 * These are Global Mutations
 * @public Mutations
 * @typeParam IRootState - ROOT STATE
 * @typeParam IRootMutationsType - RootMutations
 */
export const mutations: MutationTree<IRootState> & RootMutationsTypes = {
	/**
	 * Updates Current APP Version
	 * 
	 * @param {IRootState} state - global state
	 * @param {String} payload - new `string` version
	 */
	[ROOT_STORE.MUTATIONS.SET_VERSION](state: IRootState, payload: string): void { state.version = payload; },
	/**
	 * Updates Current Is Mobile Device
	 * 
	 * @param {IRootState} state - global state
	 * @param {Boolean} payload - true/false
	 */
	 [ROOT_STORE.MUTATIONS.SET_IS_MOBILE_DEVICE](state: IRootState, payload: boolean): void { state.isMobile = payload; },
	 /**
	 * Updates Current Loading State
	 * 
	 * @param {IRootState} state - global state
	 * @param {Boolean} payload - true/false
	 */
	[ROOT_STORE.MUTATIONS.SET_IS_LOADING](state: IRootState, payload: boolean): void { state.loading = payload; },
	/**
	 * Updates Current Employees Count
	 * 
	 * @param {IRootState} state - global state
	 * @param {Number} payload - new employees count
	 */
	 [ROOT_STORE.MUTATIONS.SET_EMPLOYEES_COUNT](state: IRootState, payload: number): void { state.employeesCount = payload; },
	 /**
	 * Updates Current Employees List
	 * 
	 * @param {IRootState} state - global state
	 * @param {IEmployeeData[]} payload - Updated employees list
	 */
	[ROOT_STORE.MUTATIONS.SET_EMPLOYEES](state: IRootState, payload: Array<IEmployeeData>): void { state.employees = payload; },
	/**
	 * TODO:
	 * 	ADD COMMENTS TO METHODS BELOW 
	 */
	[ROOT_STORE.MUTATIONS.SET_SHOW_CREATE_MODAL](state: IRootState, payload: boolean): void { state.showCreateModal = payload; },
	[ROOT_STORE.MUTATIONS.SET_EDIT_MODAL](state: IRootState, {showModal, id}): void {
		state.showEditModal = showModal;
		state.editModalById = id;
	},
	[ROOT_STORE.MUTATIONS.SET_MODAL](state: IRootState, payload: boolean): void {
		state.showModal = payload;
	},
	[ROOT_STORE.MUTATIONS.SET_LIGHT_DARK_MODE](state: IRootState, payload: boolean): void {
		state.darkMode = payload;
	},
	[ROOT_STORE.MUTATIONS.SET_COLOR_SCHEME](state: IRootState, payload: DarkModeColorTypes): void {
		state.colorScheme = payload;
	}
}
