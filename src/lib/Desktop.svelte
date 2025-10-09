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
			<Icon name={file.icon} width={60} height={60} />
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
		gap: 2rem;
		margin: 2rem;
	}
	@media (max-width: 768px) {
		.desktop {
			position: absolute;
			bottom: 0;
			width: 100%;
			flex-direction: row;
			justify-content: center;
			background-color: var(--nord16);
			margin: 0;
			padding: 0.5rem 0;
		}
	}

	button {
		width: 90px;
		height: 90px;
		border-color: transparent;
		border-radius: 0.5rem;
		background-color: transparent;
		color: inherit;
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
