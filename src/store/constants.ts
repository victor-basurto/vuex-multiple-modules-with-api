import {
	RootGetters,
	RootMutations,
	RootActions,
	EmployeeGetters,
	EmployeeMutations,
	EmployeeActions,
	NavbarGetters,
	NavbarMutations,
	NavbarActions
} from './enums';

/**
 * Index [GETTERS, MUTATIONS, ACTIONS] into ROOT_STORE
 */
export const ROOT_STORE = {
	GETTERS: RootGetters,
	MUTATIONS: RootMutations,
	ACTIONS: RootActions
}

/**
 * Index [GETTERS, MUTATIONS, ACTIONS] into EMPLOYEE_STORE
 */
export const EMPLOYEE_STORE = {
	GETTERS: EmployeeGetters,
	MUTATIONS: EmployeeMutations,
	ACTIONS: EmployeeActions
}

/**
 * Index [GETTERS, MUTATIONS, ACTIONS] into NAVBAR_STORE
 */
export const NAVBAR_STORE = {
	GETTERS: NavbarGetters,
	MUTATIONS: NavbarMutations,
	ACTIONS: NavbarActions
}
