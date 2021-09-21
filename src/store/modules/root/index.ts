import { Module, ModuleTree } from 'vuex';
import { IRootState } from '@/store/interfaces';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { state } from './state';
import EMPLOYEE_MODULE from '../employee';

// Modules 
const modules: ModuleTree<IRootState> = {
	EMPLOYEE_MODULE
}
const root: Module<IRootState, IRootState> = {
	state,
	getters,
	mutations,
	actions,
	modules
}
export default root;
