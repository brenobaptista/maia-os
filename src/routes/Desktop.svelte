<script>
	import { files } from './files.js';
	import { openedFile } from './stores.js';

	const setOpenedFile = (filePosition) => {
		openedFile.set(filePosition);
	};
</script>

<div class="desktop">
	{#each files as file}
		<button on:click={() => setOpenedFile(files.indexOf(file))}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="75"
				height="75"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
				<polyline points="14 2 14 8 20 8" />
				<line x1="16" y1="13" x2="8" y2="13" />
				<line x1="16" y1="17" x2="8" y2="17" />
				<polyline points="10 9 9 9 8 9" />
			</svg>
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
