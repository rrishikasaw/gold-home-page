<script setup lang="ts">
import { useSnackStore } from '~/stores/snack';
import { useConfirmStore } from '~/stores/confirm';
import { useAlertStore } from '~/stores/alert';
const snack = useSnackStore();
const confirm = useConfirmStore();
const alert = useAlertStore();

onMounted(() => {
	// alert.info('Hi There', 'This is an info');
	// alert.error('Hi There', 'This is an error');
	// alert.success('Hi There', 'This is an success');
	// alert.warning('Hi There', 'This is an warning');
});
</script>

<template>
	<Header />

	<main>
		<!-- Alert Message -->
		<!-- <v-container> -->
			<v-alert
				v-model="alert.visible"
				border="start"
				variant="tonal"
				closable
				:icon="alert.icon"
				close-label="Close"
				:color="alert.color"
				:title="alert.title"
			>
				{{ alert.message }}
			</v-alert>
		<!-- </v-container> -->
		<slot />
	</main>
	<Footer />

	<!-- Snackbar -->
	<v-snackbar v-model="snack.visible" :color="snack.color">
		{{ snack.message }}

		<template v-slot:actions>
			<v-btn :color="snack.dismissColor" variant="text" @click="snack.hide">Close</v-btn>
		</template>
	</v-snackbar>

	<!-- Confirm Dialog -->
	<v-dialog v-model="confirm.visible" persistent width="auto" min-width="700px">
		<v-card>
			<v-card-title class="text-h5 fw-bold">{{ confirm.title }}</v-card-title>
			<v-card-text>{{ confirm.message }}</v-card-text>
			<v-card-actions>
				<v-spacer></v-spacer>
				<v-btn
					:color="confirm.cancelColor"
					variant="text"
					@click="
						confirm.onCancel();
						confirm.hide();
					"
					>{{ confirm.cancelText }}</v-btn
				>
				<v-btn
					:color="confirm.okColor"
					variant="text"
					@click="
						confirm.onOk();
						confirm.hide();
					"
					>{{ confirm.okText }}</v-btn
				>
			</v-card-actions>
		</v-card>
	</v-dialog>
</template>

<style scoped>
main {
	min-height: calc(100dvh - 70px - 70px);
}
</style>
