import { MutationTree } from 'vuex';
import { ROOT_STORE } from '@/store/constants';
import { RootMutationsTypes, IRootState, IEmployeeData } from '@/store/interfaces';

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
	[ROOT_STORE.MUTATIONS.SET_VERSION](state: IRootState, payload: string) { state.version = payload; },
	/**
	 * Updates Current Is Mobile Device
	 * 
	 * @param {IRootState} state - global state
	 * @param {Boolean} payload - true/false
	 */
	 [ROOT_STORE.MUTATIONS.SET_IS_MOBILE_DEVICE](state: IRootState, payload: boolean) { state.isMobile = payload; },
	 /**
	 * Updates Current Loading State
	 * 
	 * @param {IRootState} state - global state
	 * @param {Boolean} payload - true/false
	 */
	[ROOT_STORE.MUTATIONS.SET_IS_LOADING](state: IRootState, payload: boolean) { state.loading = payload; },
	/**
	 * Updates Current Employees Count
	 * 
	 * @param {IRootState} state - global state
	 * @param {Number} payload - new employees count
	 */
	 [ROOT_STORE.MUTATIONS.SET_EMPLOYEES_COUNT](state: IRootState, payload: number) { state.employeesCount = payload; },
	 /**
	 * Updates Current Employees List
	 * 
	 * @param {IRootState} state - global state
	 * @param {IEmployeeData[]} payload - Updated employees list
	 */
	[ROOT_STORE.MUTATIONS.SET_EMPLOYEES](state: IRootState, payload: Array<IEmployeeData>) { state.employees = payload; },
}
