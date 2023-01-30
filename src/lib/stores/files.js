import { writable } from 'svelte/store';

export const files = [{ name: 'README.txt' }];

export const openedFile = writable(null);
