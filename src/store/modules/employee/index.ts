import { Module } from 'vuex';
import { EmployeeStateTypes, IRootState } from '@/store/interfaces';
import { getters } from './getters';
import { mutations } from './mutations';
import { actions } from './actions';
import { state } from './state';

// Employee Module
const EMPLOYEE_MODULE: Module<EmployeeStateTypes, IRootState> = {
	state,
	getters,
	mutations,
	actions
}
export default EMPLOYEE_MODULE;
