import { writable } from 'svelte/store';

export const files = [
	{ name: 'README.txt', content: 'This is a website that simulates a fictional operating system.' }
];

export const openedFile = writable(null);
