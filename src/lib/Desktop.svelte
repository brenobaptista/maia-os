<script>
	import Icon from './Icon.svelte';
	import { files, openedFile } from './stores/files';

	const setOpenedFile = (file) => {
		const fileIndex = files.indexOf(file);
		openedFile.set(fileIndex);
	};
</script>

<div class="desktop">
	{#each files as file}
		<button on:touchend={() => setOpenedFile(file)} on:dblclick={() => setOpenedFile(file)}>
			<Icon name={file.icon} width={72} height={72} />
			<div class="file-name">
				{file.name}
			</div>
		</button>
	{/each}
</div>

<style>
	.desktop {
		max-height: 100vh;
		display: flex;
		flex-direction: column;
		flex-wrap: wrap;
		align-content: flex-start;
		gap: 1rem;
		margin: 1rem;
	}

	button {
		width: 150px;
		height: 120px;
		border-color: transparent;
		background-color: transparent;
		color: inherit;
		border-radius: 0.5rem;
		transition: background-color 0.1s ease-out;
	}
	button:hover {
		border: 1px solid var(--nord16);
		background-color: var(--nord1);
	}
	button:focus {
		border: 1px solid var(--nord16);
		background-color: var(--nord3);
	}

	.file-name {
		word-break: break-word;
	}
</style>
