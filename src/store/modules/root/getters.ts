import { GetterTree } from 'vuex';
import { ROOT_STORE } from '@/store/constants';
import { IRootGettersTypes, IRootState, IEmployeeData } from '@/store/interfaces';

/**
 * ROOT GETTERS
 * @public ROOT GETTERS
 * @typeParam IRootState - ROOT STATE
 * @typeParam IRootGettersType - RootGetters
 */
export const getters: GetterTree<IRootState, IRootState> & IRootGettersTypes = {
	/**
	 * Returns App Version
	 * 
	 * @param {IRootState} state - Root State
	 * @returns String - App Verson
	 */
	[ROOT_STORE.GETTERS.UPDATED_VERSION]: (state: IRootState): string => state.version,
	/**
	 * Returns Loading Status
	 * 
	 * @param {IRootState} state - Root State
	 * @returns Boolean - True/False
	 */
	[ROOT_STORE.GETTERS.IS_LOADING]: (state: IRootState): boolean => state.loading,
	/**
	 * Returns Wether device is Mobile or Not
	 * 
	 * @param {IRootState} state - Root State
	 * @returns Boolean - True/False
	 */
	[ROOT_STORE.GETTERS.IS_MOBILE_DEVICE]: (state: IRootState): boolean => state.isMobile,
	/**
	 * Returns Loading Status
	 * 
	 * @param {IRootState} state - Root State
	 * @returns Boolean - True/False
	 */
	[ROOT_STORE.GETTERS.IS_LOADING]: (state: IRootState): boolean => state.loading,
	/**
	 * Returns Number of Employees
	 * 
	 * @param {IRootState} state - Root State
	 * @returns Number - employeesCount
	 */
	[ROOT_STORE.GETTERS.EMPLOYEES_COUNT]: (state: IRootState): number => state.employeesCount,
	/**
	 * Returns Employees List
	 * 
	 * @param {IRootState} state - Root State
	 * @returns IEmployeeData[] - employees
	 */
	 [ROOT_STORE.GETTERS.EMPLOYEES]: (state: IRootState): Array<IEmployeeData> => state.employees,
}
