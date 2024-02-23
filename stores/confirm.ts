import { defineStore } from 'pinia';

type ButtonColor = 'green-darken-1' | 'red-darken-1';

interface ConfirmDialogOptions {
	_okText?: string;
	_cancelText?: string;
	_okColor?: ButtonColor;
	_cancelColor?: ButtonColor;
	_onCancel?: Function;
}

export const useConfirmStore = defineStore('confirm', () => {
	const hide = () => (visible.value = false);

	const visible = ref(false);
	const title = ref('');
	const message = ref('');
	const okText = ref('Confirm');
	const cancelText = ref('Cancel');
	const okColor = ref<ButtonColor>('green-darken-1');
	const cancelColor = ref<ButtonColor>('red-darken-1');
	const onOk = ref<Function>(hide);
	const onCancel = ref<Function>(hide);

	function show(
		_title: string,
		_message: string,
		_onOk: Function,
		options: ConfirmDialogOptions = {
			_okText: 'Confirm',
			_cancelText: 'Cancel',
			_okColor: 'green-darken-1',
			_cancelColor: 'red-darken-1',
			_onCancel: hide,
		}
	) {
		title.value = _title;
		message.value = _message;
		visible.value = true;
		okText.value = options._okText ?? 'Confirm';
		cancelText.value = options._cancelText ?? 'Cancel';
		okColor.value = options._okColor ?? 'green-darken-1';
		cancelColor.value = options._cancelColor ?? 'red-darken-1';
		onOk.value = _onOk ?? hide;
		onCancel.value = options._onCancel ?? hide;
	}

	return { visible, title, message, okText, cancelText, okColor, cancelColor, onOk, onCancel, hide, show };
});
