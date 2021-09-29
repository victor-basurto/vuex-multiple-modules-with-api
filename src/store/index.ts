import { createLogger, createStore } from 'vuex';
import { IRootState } from './interfaces';
import { RootStoreModuleTypes } from './modules/root/types';
import { EmployeeStoreModuleTypes } from './modules/employee/types';
import { NavbarStoreModuleTypes } from './modules/base/nav/types';


import root from './modules/root'

export const store = createStore<IRootState>({
	...root,
	plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : []
});

type StoreModules = {
	employeeModule: EmployeeStoreModuleTypes;
	navbarModule: NavbarStoreModuleTypes;
	root: RootStoreModuleTypes;
}

export type Store = EmployeeStoreModuleTypes<
	Pick<StoreModules, 'employeeModule'>
> &
	NavbarStoreModuleTypes<Pick<StoreModules, 'navbarModule'>> &
	RootStoreModuleTypes<Pick<StoreModules, 'root'>
>;
