<script>
	let files = [
		{ name: 'placeholder.txt' },
		{ name: 'placeholder2.txt' },
		{ name: 'placeholder3.txt' }
	];
</script>

{#each files as file}
	<button on:click={() => console.log(file.name)}>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="72"
			height="72"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			aria-hidden="true"
		>
			<title>Text file icon</title>
			<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
			<polyline points="14 2 14 8 20 8" />
			<line x1="16" y1="13" x2="8" y2="13" />
			<line x1="16" y1="17" x2="8" y2="17" />
			<polyline points="10 9 9 9 8 9" />
		</svg>
		<div>
			{file.name}
		</div>
	</button>
{/each}

<style>
	button {
		border-color: transparent;
		background-color: transparent;
		color: inherit;
	}
	button:hover {
		background-color: var(--color-primary);
	}
</style>
