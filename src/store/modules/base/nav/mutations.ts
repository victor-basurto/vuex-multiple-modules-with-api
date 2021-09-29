import { MutationTree } from 'vuex';
import { NAVBAR_STORE } from '@/store/constants';
import { NavbarStateTypes, NavbarMutationsType } from '@/store/interfaces';

/**
 * NAVBAR MUTATIONS
 * @public NAVBAR Mutations
 * @typeParam NavbarStateTypes - NAVBAR State
 * @typeParam NavbarMutationsType - NavbarMutations
 */
export const mutations: MutationTree<NavbarStateTypes> & NavbarMutationsType = {
	/**
	 * Updates ToggleNavbar `Active Status`
	 * 
	 * @param {NavbarStateTypes} - Navbar State
	 * @param {Boolean} payload - true/false
	 */
	[NAVBAR_STORE.MUTATIONS.SET_TOGGLE_NAVBAR](state: NavbarStateTypes, payload: boolean): void { state.isNavOpen = payload; }
}
