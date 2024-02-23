import { defineStore } from 'pinia';

type AlertType = 'warning' | 'error' | 'success' | 'info';

export const useAlertStore = defineStore('alert', () => {
	const visible = ref(false);
	const alertType = ref<AlertType>('info');
	const title = ref('');
	const message = ref('');

	const icon = computed(() => `$${alertType.value}`);
	const color = computed(() => {
		if (alertType.value === 'info') {
			return 'deep-purple-accent-4';
		} else if (alertType.value === 'success') {
			return 'green-darken-4';
		}
		return alertType.value;
	});

	function info(_title: string, _message: string) {
		alertType.value = 'info';
		title.value = _title;
		message.value = _message;
		visible.value = true;
	}

	function warning(_title: string, _message: string) {
		alertType.value = 'warning';
		title.value = _title;
		message.value = _message;
		visible.value = true;
	}

	function success(_title: string, _message: string) {
		alertType.value = 'success';
		title.value = _title;
		message.value = _message;
		visible.value = true;
	}

	function error(_title: string, _message: string) {
		alertType.value = 'error';
		title.value = _title;
		message.value = _message;
		visible.value = true;
	}

	const hide = () => (visible.value = false);

	return { visible, alertType, title, message, icon, color, hide, success, error, info, warning };
});
