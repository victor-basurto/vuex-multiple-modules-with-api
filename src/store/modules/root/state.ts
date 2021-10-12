import { IRootState, DarkModeColors } from '@/store/interfaces';
/**
 * Initialize Root State
 */
export const state: IRootState = {
	root: true, 
	version: '0.0.1',
	employees: [],
	isMobile: false,
	loading: false,
	employeesCount: 0,
	showCreateModal: false,
	showEditModal: false,
	showModal: false,
	editModalById: null,
	darkMode: false,
	colorScheme: DarkModeColors.LIGHT
}
