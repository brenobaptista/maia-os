<script>
	let files = [
		{ name: 'placeholder.txt' },
		{ name: 'placeholder2.txt' },
		{ name: 'placeholder3.txt' }
	];
</script>

{#each files as file}
	<button on:click={() => console.log(file.name)}>
		{file.name}
	</button>
{/each}
