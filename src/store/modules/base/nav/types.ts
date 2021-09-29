import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import {
	NavbarStateTypes,
	NavbarMutationsType,
	INavbarGetterTypes,
	INavbarActionTypes
} from '@/store/interfaces';

/**
 * Navbar Store Module Types Definition - useful for managing Navbar State
 */
 export type NavbarStoreModuleTypes<S = NavbarStateTypes> = Omit<
 VuexStore<S>,
 'commit' | 'getters' | 'dispatch'
> & {
 commit<
	 K extends keyof NavbarMutationsType,
	 P extends Parameters<NavbarMutationsType[K]>[1]
 >(
	 key: K,
	 payload?: P,
	 options?: CommitOptions
 ): ReturnType<NavbarMutationsType[K]>;
} & {
 getters: {
	 [K in keyof INavbarGetterTypes]: ReturnType<INavbarGetterTypes[K]>;
 }
} & {
 dispatch<K extends keyof INavbarActionTypes>(
	 key: K,
	 payload?: Parameters<INavbarActionTypes[K]>[1],
	 options?: DispatchOptions
 ): ReturnType<INavbarActionTypes[K]>;
};
