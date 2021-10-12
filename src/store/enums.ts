/************** ROOT ENUMS ******************/
export enum RootGetters {
	UPDATED_VERSION = 'UPDATED_VERSION',
	IS_MOBILE_DEVICE = 'IS_MOBILE_DEVICE',
	EMPLOYEES = 'EMPLOYEES',
	EMPLOYEES_COUNT = 'EMPLOYEES_COUNT',
	IS_LOADING = 'IS_LOADING',
	ROOT_DISPATCH = 'ROOT_DISPATCH',
	SHOW_CREATE_MODAL = 'SHOW_CREATE_MODAL',
	EDIT_MODAL = 'EDIT_MODAL',
	MODAL = 'MODAL',
	LIGHT_DARK_MODE = 'LIGHT_DARK_MODE',
	COLOR_SCHEME = 'COLOR_SCHEME'
}
export enum RootMutations {
	SET_VERSION = 'SET_VERSION',
	SET_IS_MOBILE_DEVICE = 'SET_IS_MOBILE_DEVICE',
	SET_EMPLOYEES = 'SET_EMPLOYEES',
	SET_EMPLOYEES_COUNT = 'SET_EMPLOYEES_COUNT',
	SET_IS_LOADING = 'SET_IS_LOADING',
	SET_ROOT_DISPATCH = 'SET_ROOT_DISPATCH',
	SET_SHOW_CREATE_MODAL = 'SET_SHOW_CREATE_MODAL',
	SET_EDIT_MODAL = 'SET_EDIT_MODAL',
	SET_MODAL = 'SET_MODAL',
	SET_LIGHT_DARK_MODE = 'SET_LIGHT_DARK_MODE',
	SET_COLOR_SCHEME = 'SET_COLOR_SCHEME'
}
export enum RootActions {
	UPDATE_VERSION = 'UPDATE_VERSION',
	UPDATE_IS_MOBILE_DEVICE = 'UPDATE_IS_MOBILE_DEVICE',
	UPDATE_EMPLOYEES = 'UPDATE_EMPLOYEES',
	UPDATE_EMPLOYEES_COUNT = 'UPDATE_EMPLOYEES_COUNT',
	UPDATE_IS_LOADING = 'UPDATE_IS_LOADING',
	UPDATE_ROOT_DISPATCH = 'UPDATE_ROOT_DISPATCH',
	UPDATE_SHOW_CREATE_MODAL = 'UPDATE_SHOW_CREATE_MODAL',
	UPDATE_EDIT_MODAL = 'UPDATE_EDIT_MODAL',
	UPDATE_MODAL = 'UPDATE_MODAL',
	UPDATE_LIGHT_DARK_MODE = 'UPDATE_LIGHT_DARK_MODE',
	UPDATE_COLOR_SCHEME = 'UPDATE_COLOR_SCHEME'
}
/************** EMPLOYEE ******************/
export enum EmployeeGetters {
	EMPLOYEE_BY_ID = 'EMPLOYEE_BY_ID',
	EMPLOYEE_IS_ADMIN = 'EMPLOYEE_IS_ADMIN',
	EMPLOYEE_IS_ACTIVE = 'EMPLOYEE_IS_ACTIVE',
	GET_ROOT_DISPATCH = 'GET_ROOT_DISPATCH'
}
export enum EmployeeMutations {
	SET_EMPLOYEE_BY_ID = 'SET_EMPLOYEE_BY_ID',
	SET_EMPLOYEE_IS_ADMIN = 'SET_EMPLOYEE_IS_ADMIN',
	SET_EMPLOYEE_IS_ACTIVE = 'SET_EMPLOYEE_IS_ACTIVE',
	SET_ROOT_DISPATCH = 'SET_ROOT_DISPATCH'
}
export enum EmployeeActions {
	UPDATE_EMPLOYEE_BY_ID = 'UPDATE_EMPLOYEE_BY_ID',
	UPDATE_EMPLOYEE_IS_ADMIN = 'UPDATE_EMPLOYEE_IS_ADMIN',
	UPDATE_EMPLOYEE_IS_ACTIVE = 'UPDATE_EMPLOYEE_IS_ACTIVE',
	UPDATE_ROOT_DISPATCH = 'UPDATE_ROOT_DISPATCH'
}
/************** BASE NAVBAR ******************/
export enum NavbarGetters {
	TOGGLE_NAVBAR = 'TOGGLE_NAVBAR'
}
export enum NavbarMutations {
	SET_TOGGLE_NAVBAR = 'SET_TOGGLE_NAVBAR'
}
export enum NavbarActions {
	UPDATE_TOGGLE_NABVAR = 'UPDATE_TOGGLE_NAVBAR'
}
