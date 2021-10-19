import { EmployeeStateTypes, IEmployeeData } from '@/store/interfaces';

/**
 * Initialize Employee State
 */
export const state: EmployeeStateTypes = {
	employee: {} as IEmployeeData,
	rootDispatch: false
}
