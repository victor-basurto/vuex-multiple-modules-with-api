import { Store as VuexStore, CommitOptions, DispatchOptions } from 'vuex';
import {
	UserProfileStateTypes,
	UserProfileMutationsType,
	IUserProfileGetterTypes,
	IUserProfileActionTypes
} from '@/store/interfaces';

/**
 * Employees Store Module Types Definition - useful for managing Employee State
 */
export type UserProfileStoreModuleTypes<S = UserProfileStateTypes> = Omit<
	VuexStore<S>,
	'commit' | 'getters' | 'dispatch'
> & {
	commit<
		K extends keyof UserProfileMutationsType,
		P extends Parameters<UserProfileMutationsType[K]>[1]
	>(
		key: K,
		payload?: P,
		options?: CommitOptions
	): ReturnType<UserProfileMutationsType[K]>;
} & {
	getters: {
		[K in keyof IUserProfileGetterTypes]: ReturnType<IUserProfileGetterTypes[K]>;
	}
} & {
	dispatch<K extends keyof IUserProfileActionTypes>(
		key: K,
		payload?: Parameters<IUserProfileActionTypes[K]>[1],
		options?: DispatchOptions
	): ReturnType<IUserProfileActionTypes[K]>;
};
