import { defineStore } from 'pinia';
import { Book, User } from 'utils/types';

export const useSiteStore = defineStore('site', () => {
	const user = ref<User | undefined>();
	const username = ref('');
	const otp = ref('');

	return { user, username, otp };
});
