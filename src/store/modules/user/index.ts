import { Module } from 'vuex';
import { UserProfileStateTypes, IRootState } from '@/store/interfaces';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { state } from './state';

// Employee Module
const USER_PROFILE_MODULE: Module<UserProfileStateTypes, IRootState> = {
	state,
	getters,
	mutations,
	actions
}
export default USER_PROFILE_MODULE;
