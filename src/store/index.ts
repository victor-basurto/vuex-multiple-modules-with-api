import { createLogger, createStore } from 'vuex';
import { IRootState } from './interfaces';
import { RootStoreModuleTypes } from './modules/root/types';
import { EmployeeStoreModuleTypes } from './modules/employee/types';
import { NavbarStoreModuleTypes } from './modules/base/nav/types';
import { UserProfileStoreModuleTypes } from './modules/user/types';


import root from './modules/root'

export const store = createStore<IRootState>({
	...root,
	plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : []
});

type StoreModules = {
	userProfileModule: UserProfileStoreModuleTypes;
	employeeModule: EmployeeStoreModuleTypes;
	navbarModule: NavbarStoreModuleTypes;
	root: RootStoreModuleTypes;
}

export type Store = RootStoreModuleTypes<
	Pick<StoreModules, 'root'>
> &
	NavbarStoreModuleTypes<Pick<StoreModules, 'navbarModule'>
> &
	UserProfileStoreModuleTypes<Pick<StoreModules, 'userProfileModule'>
> &
	EmployeeStoreModuleTypes<Pick<StoreModules, 'employeeModule'>
>;
