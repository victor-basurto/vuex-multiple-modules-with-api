import { ActionTree } from 'vuex';
import { NAVBAR_STORE } from '@/store/constants';
import { NavbarStateTypes, INavbarActionTypes, IRootState } from '@/store/interfaces';

/**
 * NAVBAR ACTIONS
 * @public NAVBAR ACTIONS
 * @typeParam NavbarStateTypes - NAVBAR STATE
 * @typeParam IRootState - Root State
 * @typeParam INavbarActionTypes - NAVBAR Actions
 */
export const actions: ActionTree<NavbarStateTypes, IRootState> & INavbarActionTypes = {
	/**
	 * Sets Navbar Toggle Menu to True/False
	 * 
	 * @param {Objec<Action>} {commit} - action
	 * @param {Boolean} payload - true/false
	 */
	[NAVBAR_STORE.ACTIONS.UPDATE_TOGGLE_NABVAR]({ commit }, payload: boolean) {
		commit(NAVBAR_STORE.MUTATIONS.SET_TOGGLE_NAVBAR, payload);
	}
}
