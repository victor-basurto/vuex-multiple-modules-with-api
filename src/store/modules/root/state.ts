import { IRootState } from '@/store/interfaces';
/**
 * Initialize Root State
 */
export const state: IRootState = {
	root: true, 
	version: '0.0.1',
	employees: [],
	isMobile: false,
	loading: false,
	employeesCount: 0
}
