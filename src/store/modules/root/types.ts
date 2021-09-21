import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import {
	IRootState,
	RootMutationsTypes,
	IRootGettersTypes,
	IRootActionsTypes
} from '@/store/interfaces';

/**
 * Root Store Module Types definition -> useful when managing root store
 */
export type RootStoreModule<S = IRootState> = Omit<
	VuexStore<S>,
	'commit' | 'getters' | 'dispatch'
> & {
	commit<
		K extends keyof RootMutationsTypes,
		P extends Parameters<RootMutationsTypes[K]>[1]
	>(
		key: K,
		payload?: P,
		options?: CommitOptions
	): ReturnType<RootMutationsTypes[K]>;
} & {
	getters: {
		[K in keyof IRootGettersTypes]: ReturnType<IRootGettersTypes[K]>
	};
} & {
	dispatch<K extends keyof IRootActionsTypes>(
		key: K,
		payload?: Parameters<IRootActionsTypes[K]>[1],
		options?: DispatchOptions
	): ReturnType<IRootActionsTypes[K]>;
};
