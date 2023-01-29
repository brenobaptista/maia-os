<script>
	import FileText from './FileText.svelte';
	import { files } from './files.js';
	import { openedFile } from './stores.js';
</script>

<div class="desktop">
	{#each files as file}
		<button on:click={() => openedFile.set(files.indexOf(file))}>
			<FileText width={72} height={72} />
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
		transition: background-color 0.1s ease-in-out;
	}
	button:hover {
		border: 1px solid var(--nord16);
		background-color: var(--nord1);
	}

	.file-name {
		word-break: break-word;
	}
</style>
