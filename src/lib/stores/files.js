import { writable } from 'svelte/store';

export const files = [
	{
		name: 'README.txt',
		icon: 'file-text',
		content: 'readme'
	}
];

export const openedFile = writable(null);
