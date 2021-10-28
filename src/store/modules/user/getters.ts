import { GetterTree } from 'vuex';
import { USER_STORE } from '@/store/constants';
import {
	IUserProfileGetterTypes,
	UserProfileStateTypes,
	IRootState,
	IEmployeeData
} from '@/store/interfaces';

/**
 * Employee GETTERS
 * @public Employee Getters
 * @typeParam EmployeeStateTypes - Employee State
 * @typeParam IRootState - Root State
 * @typeParam IEmployeeGettersTypes - EmployeeGetters
 */
export const getters: GetterTree<UserProfileStateTypes, IRootState> & IUserProfileGetterTypes = {
	[USER_STORE.GETTERS.USER_EMAIL]: (state: UserProfileStateTypes): string => state.email,
	[USER_STORE.GETTERS.USER_IS_LOGGED_IN]: (state: UserProfileStateTypes): boolean => state.isLoggedIn,
	[USER_STORE.GETTERS.USERNAME]: (state: UserProfileStateTypes): (string | null) => state.userName
}
