import { GetterTree } from 'vuex';
import { NAVBAR_STORE } from '@/store/constants';
import { INavbarGetterTypes, NavbarStateTypes, IRootState } from '@/store/interfaces';

/**
 * Navbar GETTERS
 * @public Navbar Getters
 * @typeParam NavbarStateTypes - Navbar State
 * @typeParam IRootState - Root State
 * @typeParam INavbarGetterTypes - NavbarGetters
 */
export const getters: GetterTree<NavbarStateTypes, IRootState> & INavbarGetterTypes = {
	/**
	 * Returns isNavOpen
	 * 
	 * @param {NavbarStateTypes} - Navbar State
	 * @returns isNavOpen - true/false
	 */
	[NAVBAR_STORE.GETTERS.TOGGLE_NAVBAR]: (state: NavbarStateTypes): boolean => state.isNavOpen
}
