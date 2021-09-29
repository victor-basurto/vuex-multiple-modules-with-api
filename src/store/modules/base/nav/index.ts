import { Module } from 'vuex';
import { NavbarStateTypes, IRootState } from '@/store/interfaces';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { state } from './state';

// NAVBAR Module
const NAVBAR_MODULE: Module<NavbarStateTypes, IRootState> = {
	state,
	getters,
	mutations,
	actions
}
export default NAVBAR_MODULE;
