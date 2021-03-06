import { ActionContext, DispatchOptions } from 'vuex';
import { ROOT_STORE, EMPLOYEE_STORE, NAVBAR_STORE, USER_STORE } from './constants';
/**
 * ROOT interface
 * TODO: 
 * 	Move to its own file
 */
export interface IRootState {
	root: boolean;
	loading: boolean;
	employees: Array<IEmployeeData>;
	employeesCount: number;
	version: string;
	isMobile: boolean;
	showCreateModal: boolean;
	showEditModal: boolean;
	showModal: boolean;
	darkMode: boolean;
	colorScheme: DarkModeColorTypes;
	editModalById: number | null;
}
export type DarkModeColorTypes = 'light' | 'dark';
export enum DarkModeColors {
	LIGHT = 'light',
	DARK = 'dark'
}
/**
 * SERVER RESPONSE interface
 * TODO: 
 * 	Move to its own file
 */
export interface IServerResponse {
	success: number;
	message: string;
	data: Array<IEmployeeData>;
}
/**
 * EMPLOYEE interface
 * TODO: 
 * 	Move to its own file
 */
export interface IEmployeeData {
	id: number;
	firstName: string;
	lastName: string;
	isActive: boolean;
	isAdmin: boolean;
}


/**
 * Merge all State from Exposed Modules
 */
export interface IMergedState extends IRootState {
	employeeModule: EmployeeStateTypes;
	navbarModule: NavbarStateTypes;
}

/**
 * ROOT GETTERS
 */
 export interface IRootGettersTypes {
	[ROOT_STORE.GETTERS.IS_MOBILE_DEVICE](state: IRootState): boolean;
	[ROOT_STORE.GETTERS.UPDATED_VERSION](state: IRootState): string;
	[ROOT_STORE.GETTERS.IS_LOADING](state: IRootState): boolean;
	[ROOT_STORE.GETTERS.EMPLOYEES_COUNT](state: IRootState): number;
	[ROOT_STORE.GETTERS.EMPLOYEES](state: IRootState): IEmployeeData[];
	[ROOT_STORE.GETTERS.MODAL](state: IRootState): boolean;
	[ROOT_STORE.GETTERS.EDIT_MODAL](state: IRootState): boolean;
	[ROOT_STORE.GETTERS.SHOW_CREATE_MODAL](state: IRootState): boolean;
	[ROOT_STORE.GETTERS.LIGHT_DARK_MODE](state: IRootState): boolean;
	[ROOT_STORE.GETTERS.COLOR_SCHEME](state: IRootState): DarkModeColorTypes;
}
/**
 * ROOT MUTATIONS `TYPE`
 */
export type RootMutationsTypes<S = IRootState> = {
	[ROOT_STORE.MUTATIONS.SET_IS_MOBILE_DEVICE](state: S, payload: boolean): void;
	[ROOT_STORE.MUTATIONS.SET_VERSION](state: S, payload: string): void;
	[ROOT_STORE.MUTATIONS.SET_IS_LOADING](state: S, payload: boolean): void;
	[ROOT_STORE.MUTATIONS.SET_EMPLOYEES_COUNT](state: S, payload: number): void;
	[ROOT_STORE.MUTATIONS.SET_EMPLOYEES](state: S, payload: IEmployeeData[]): void;
	[ROOT_STORE.MUTATIONS.SET_SHOW_CREATE_MODAL](state: S, payload: boolean): void;
	[ROOT_STORE.MUTATIONS.SET_EDIT_MODAL](state: S, payload: {showModal: boolean, id: number}): void;
	[ROOT_STORE.MUTATIONS.SET_MODAL](state: S, payload: boolean): void;
	[ROOT_STORE.MUTATIONS.SET_LIGHT_DARK_MODE](state: S, payload: boolean): void;
	[ROOT_STORE.MUTATIONS.SET_COLOR_SCHEME](state: S, payload: DarkModeColorTypes): void;
}
/**
 * AugmentedActionContext for ROOT definition
 */
 type AugmentedActionContextRoot = {
	commit<K extends keyof RootMutationsTypes>(
		key: K,
		payload: Parameters<RootMutationsTypes[K]>[1]
	): ReturnType<RootMutationsTypes[K]>;
} & Omit<ActionContext<IRootState, IRootState>, 'commit'> & {
	dispatch<K extends keyof StoreActions>(
		key: K,
		payload?: Parameters<StoreActions[K]>[1],
		options?: DispatchOptions
	): ReturnType<StoreActions[K]>;
};
/**
 * ROOT Actions `TYPE`
 */
export interface IRootActionsTypes {
	[ROOT_STORE.ACTIONS.UPDATE_VERSION]({ commit }: AugmentedActionContextRoot, payload: string): void;
	[ROOT_STORE.ACTIONS.UPDATE_IS_MOBILE_DEVICE]({ commit }: AugmentedActionContextRoot, payload: boolean): void;
	[ROOT_STORE.ACTIONS.UPDATE_IS_LOADING]({ commit }: AugmentedActionContextRoot, payload: boolean): void;
	[ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES_COUNT]({ commit }: AugmentedActionContextRoot, payload: number): void;
	[ROOT_STORE.ACTIONS.UPDATE_EMPLOYEES]({ commit }: AugmentedActionContextRoot, payload: IEmployeeData[]): void;
	[ROOT_STORE.ACTIONS.UPDATE_SHOW_CREATE_MODAL]({ commit }: AugmentedActionContextRoot, payload: boolean): void;
	[ROOT_STORE.ACTIONS.UPDATE_MODAL]({ commit }: AugmentedActionContextRoot, payload: boolean): void;
	[ROOT_STORE.ACTIONS.UPDATE_EDIT_MODAL]({ commit }: AugmentedActionContextRoot, payload: {showModal: boolean, id: number}): void;
	[ROOT_STORE.ACTIONS.UPDATE_LIGHT_DARK_MODE]({ commit }: AugmentedActionContextRoot, payload: boolean): void;
	[ROOT_STORE.ACTIONS.UPDATE_COLOR_SCHEME]({ commit }: AugmentedActionContextRoot, payload: DarkModeColorTypes): void;
}

/********************* EMPLOYEE MODULE TYPES **************************/
/**
 * EMPLOYEE StateTypes
 */
export interface EmployeeStateTypes {
	employee: IEmployeeData,
	rootDispatch: boolean;
}
/**
 * EMPLOYEE MUTATIONS
 */
export interface IEmployeeGetterTypes {
	[EMPLOYEE_STORE.GETTERS.GET_ROOT_DISPATCH](state: EmployeeStateTypes): boolean;
	[EMPLOYEE_STORE.GETTERS.EMPLOYEE_IS_ACTIVE](state: EmployeeStateTypes): boolean;
	[EMPLOYEE_STORE.GETTERS.EMPLOYEE_IS_ADMIN](state: EmployeeStateTypes): boolean;
	[EMPLOYEE_STORE.GETTERS.EMPLOYEE_BY_ID](state: EmployeeStateTypes): IEmployeeData;
}
/**
 * EMPLOYEE MUTATIONS `TYPE`
 */
export type EmployeeMutationsType<S = EmployeeStateTypes> = {
	[EMPLOYEE_STORE.MUTATIONS.SET_ROOT_DISPATCH](state: S, payload?: boolean): void;
	[EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_IS_ACTIVE](state: S, payload: boolean): void;
	[EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_IS_ADMIN](state: S, payload: boolean): void;
	[EMPLOYEE_STORE.MUTATIONS.SET_EMPLOYEE_BY_ID](state: S, payload: IEmployeeData): void;
}
/**
 * AugmentedActionContext for EMPLOYEE definition
 */
export type AugmentedActionContextEmployee = {
	commit<K extends keyof EmployeeMutationsType>(
		key: K,
		payload: Parameters<EmployeeMutationsType[K]>[1]
	): ReturnType<EmployeeMutationsType[K]>;
} & Omit<ActionContext<EmployeeStateTypes, IRootState>, 'commit'>;
/**
 * EMPLOYEES Actions `TYPE`
 */
export interface IEmployeeActionsTypes {
	[EMPLOYEE_STORE.ACTIONS.UPDATE_ROOT_DISPATCH]({ commit }: AugmentedActionContextEmployee, payload: boolean): void;
	[EMPLOYEE_STORE.ACTIONS.UPDATE_EMPLOYEE_IS_ACTIVE]({ commit }: AugmentedActionContextEmployee, payload: boolean): void;
	[EMPLOYEE_STORE.ACTIONS.UPDATE_EMPLOYEE_IS_ADMIN]({ commit }: AugmentedActionContextEmployee, payload: boolean): void;
	[EMPLOYEE_STORE.ACTIONS.UPDATE_EMPLOYEE_BY_ID]({ commit }: AugmentedActionContextEmployee, payload: IEmployeeData): void;
}

/********************* NAVBAR MODULE TYPES **************************/
/**
 * NAVBAR State
 */
export interface NavbarStateTypes {
	isNavOpen: boolean;
}
/**
 * NAVBAR MUTATIONS
 */
export interface INavbarGetterTypes {
	[NAVBAR_STORE.GETTERS.TOGGLE_NAVBAR](state: NavbarStateTypes): boolean;
}
/**
 * NAVBAR MUTATIONS `TYPE`
 */
export type NavbarMutationsType<S = NavbarStateTypes> = {
	[NAVBAR_STORE.MUTATIONS.SET_TOGGLE_NAVBAR](state: S, payload: boolean): void;
}
/**
 * AugmentedActionContext for NAVBAR definition
 */
export type AugmentedActionContextNavbar = {
	commit<K extends keyof NavbarMutationsType>(
		key: K,
		payload: Parameters<NavbarMutationsType[K]>[1]
	): ReturnType<NavbarMutationsType[K]>;
} & Omit<ActionContext<NavbarStateTypes, IRootState>, 'commit'>;
/**
 * NAVBAR Actions `TYPE`
 */
export interface INavbarActionTypes {
	[NAVBAR_STORE.ACTIONS.UPDATE_TOGGLE_NABVAR]({ commit }: AugmentedActionContextNavbar, payload: boolean): void;
}
/********************* APPUSER MODULE TYPES **************************/
/**
 * UserProfile
 */
 export interface UserProfileStateTypes {
	isLoggedIn: boolean;
	userName: string;
	email: string;
	userData: IEmployeeData
}
/**
 * USERPROFILE Getters
 */
export interface IUserProfileGetterTypes {
	[USER_STORE.GETTERS.USER_EMAIL](state: UserProfileStateTypes): string;
	[USER_STORE.GETTERS.USER_PROFILE](state: UserProfileStateTypes): IEmployeeData;
	[USER_STORE.GETTERS.USER_IS_LOGGED_IN](state: UserProfileStateTypes): boolean;
}
/**
 * USERPROFILE Mutations
 */
export type UserProfileMutationsType<S = UserProfileStateTypes> = {
	[USER_STORE.MUTATIONS.SET_USER_EMAIL](state: S, payload: string): void;
	[USER_STORE.MUTATIONS.SET_USER_IS_LOGGED_IN](state: S, payload: boolean): void;
	[USER_STORE.MUTATIONS.SET_USER_PROFILE](state: S, payload: IEmployeeData): void;
}
/**
 * AugmentedActionContext for USERPROFILE definition
 */
 export type AugmentedActionContextUserProfile = {
	commit<K extends keyof UserProfileMutationsType>(
		key: K,
		payload: Parameters<UserProfileMutationsType[K]>[1]
	): ReturnType<UserProfileMutationsType[K]>;
} & Omit<ActionContext<UserProfileStateTypes, IRootState>, 'commit'>;



/**
 * USERPROFILE Actions `TYPE`
 */
export interface IUserProfileActionTypes {
	[USER_STORE.ACTIONS.UPDATE_USER_EMAIL]({ commit }: AugmentedActionContextUserProfile, payload: string): void;
	[USER_STORE.ACTIONS.UPDATE_USER_IS_LOGGED_IN]({ commit }: AugmentedActionContextUserProfile, payload: boolean): void;
	[USER_STORE.ACTIONS.UPDATE_USER_PROFILE]({ commit }: AugmentedActionContextUserProfile, payload: IEmployeeData): void;
}

/**
 * Wrap Actions and Getters from Modules
 * into `StoreActions` and `StoreGetters`
 */
export interface StoreActions
	extends IRootActionsTypes,
		IEmployeeActionsTypes,
		INavbarActionTypes,
		IUserProfileActionTypes {}
export interface StoreGetters
	extends IRootGettersTypes,
		IEmployeeGetterTypes,
		INavbarGetterTypes,
		IUserProfileGetterTypes {}
