import { Module, ModuleTree } from 'vuex';
import { IRootState } from '@/store/interfaces';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { state } from './state';

// Modules 
const modules: ModuleTree<IRootState> = {
	// add Employee module
}
const root: Module<IRootState, IRootState> = {
	state,
	getters,
	mutations,
	actions,
	modules
}
