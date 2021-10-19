import { UserProfileStateTypes, IEmployeeData } from '@/store/interfaces';
/**
 * Initialize USER State
 */
export const state: UserProfileStateTypes = {
	isLoggedIn: false,
	userName: '',
	email: '',
	userData: {} as IEmployeeData
}
