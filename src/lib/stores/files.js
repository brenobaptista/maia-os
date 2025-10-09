import { writable } from 'svelte/store';

export const files = [
	{
		name: 'Blog',
		icon: 'rss',
		content: 'iframe',
		url: 'https://brenobaptista.com/'
	},
	{
		name: 'README.txt',
		icon: 'file-text',
		content: 'readme'
	},
	{
		name: 'Notepad',
		icon: 'edit',
		content: 'notepad'
	}
];

export const openedFile = writable(null);
