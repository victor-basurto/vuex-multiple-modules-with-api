import { MutationTree } from 'vuex';
import { ROOT_STORE, USER_STORE } from '@/store/constants';
import {
	UserProfileMutationsType,
	UserProfileStateTypes,
	IEmployeeData
} from '@/store/interfaces';
export const mutations: MutationTree<UserProfileStateTypes> & UserProfileMutationsType = {
	[USER_STORE.MUTATIONS.SET_USER_EMAIL](state: UserProfileStateTypes, payload: string): void {
		state.email = payload;
	},
	[USER_STORE.MUTATIONS.SET_USER_IS_LOGGED_IN](state: UserProfileStateTypes, payload: boolean): void {
		state.isLoggedIn = payload;
	},
	[USER_STORE.MUTATIONS.SET_USERNAME](state: UserProfileStateTypes, payload: string | null): void {
		state.userName = payload
	}
}
