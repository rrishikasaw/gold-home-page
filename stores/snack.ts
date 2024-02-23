import { defineStore } from 'pinia';

type SnackColor = 'red-darken-3' | 'green-darken-2' | undefined;

export const useSnackStore = defineStore('snack', () => {
	const visible = ref(false);
	const color = ref<SnackColor>();
	const message = ref('');

	const dismissColor = computed(() => (color.value === undefined ? 'pink' : 'white'));

	function success(_message: string) {
		message.value = _message;
		visible.value = true;
		color.value = 'green-darken-2';
	}

	function error(_message: string) {
		message.value = _message;
		visible.value = true;
		color.value = 'red-darken-3';
	}

	function info(_message: string) {
		message.value = _message;
		visible.value = true;
		color.value = undefined;
	}

	const hide = () => (visible.value = false);

	return { visible, message, color, dismissColor, hide, success, error, info };
});
