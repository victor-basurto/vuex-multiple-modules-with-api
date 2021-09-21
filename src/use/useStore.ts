import { Store } from '@/store';
import { useStore as VuexStore } from 'vuex';

export function useStore(): Store {
	return VuexStore() as Store;
}
