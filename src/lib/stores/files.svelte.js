export const files = [
	{
		name: 'Blog',
		icon: 'rss',
		content: 'iframe',
		url: 'https://brenobaptista.com/'
	},
	{
		name: 'README',
		icon: 'file-text',
		content: 'readme'
	},
	{
		name: 'Notepad',
		icon: 'edit',
		content: 'notepad'
	}
];

class OpenedFileState {
	value = $state(null);
}

export const openedFileState = new OpenedFileState();
