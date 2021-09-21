import { createStore } from 'vuex';
import { IRootState } from './interfaces';
import { RootStoreModuleTypes } from './modules/root/types';
import { EmployeeStoreModuleTypes } from './modules/employee/types';

import root from './modules/root'

export const store = createStore<IRootState>(root);

type StoreModules = {
	employeeModule: EmployeeStoreModuleTypes;
	root: RootStoreModuleTypes;
}

export type Store = EmployeeStoreModuleTypes<
	Pick<StoreModules, 'employeeModule'>
> &
	RootStoreModuleTypes<Pick<StoreModules, 'root'>
>;
