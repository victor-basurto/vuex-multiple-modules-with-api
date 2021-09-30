<template>
	<div class="modal">
		<div class="modal-background"></div>
		<div class="modal-content">
			<h1>Test Modal</h1>
			<div class="card">
				<div class="card-content">
					<div class="media">
						<div class="media-content">
							<p class="title is-4">Title Modal</p>
							<p class="subtitle is-6"><b>Assigned to:</b> To Person</p>
							<p class="subtitle is-6"><b>Created by:</b> By Person</p>
						</div>
					</div>
					<div class="content">
						<p class="subtitle is-6">Description: some description</p>
					</div>
				</div>
			</div>
		</div>
		<button class="modal-close is-large"
			@click="closeModal"
			aria-label="close">
		</button>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from '@/use/useStore';
import { ROOT_STORE } from '../../../store/constants';

export default defineComponent({
	name: 'Modal',
	props: {
		id: {
			type: Number,
			required: false
		},
		showModal: {
			type: Boolean,
			required: true
		}
	},
	setup(props) {
		const store = useStore();
		const closeModal = () => {
			store.dispatch(ROOT_STORE.ACTIONS.UPDATE_SHOW_CREATE_MODAL, false);
		}
		return {
			closeModal
		}
	},
})
</script>


<style lang="scss" scoped>

</style>
