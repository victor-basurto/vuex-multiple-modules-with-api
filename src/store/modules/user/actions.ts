import { ActionTree } from 'vuex';
import { USER_STORE } from '@/store/constants';
import { UserProfileStateTypes, IEmployeeData, IRootState, IUserProfileActionTypes } from '@/store/interfaces';
/**
 * ROOT ACTIONS
 * @public ROOT ACTIONS
 * @typeParam IRootState - Root State
 * @typeParam RootActionsTypes - Root Actions
 */
export const actions: ActionTree<UserProfileStateTypes, IRootState> & IUserProfileActionTypes = {
	[USER_STORE.ACTIONS.UPDATE_USER_EMAIL]({ commit }, payload: string) {
		commit(USER_STORE.MUTATIONS.SET_USER_EMAIL, payload);
	},
	[USER_STORE.ACTIONS.UPDATE_USER_IS_LOGGED_IN]({ commit }, payload: boolean) {
		commit(USER_STORE.MUTATIONS.SET_USER_IS_LOGGED_IN, payload);
	},
	[USER_STORE.ACTIONS.UPDATE_USER_PROFILE]({ commit }, payload: IEmployeeData) {
		commit(USER_STORE.MUTATIONS.SET_USER_PROFILE, payload as IEmployeeData);
	},
	[USER_STORE.ACTIONS.UPDATED_USERNAME]({ commit }, payload: string) {
		commit(USER_STORE.MUTATIONS.SET_USERNAME, payload);
	}
}
