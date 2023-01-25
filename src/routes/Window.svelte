<script>
	import { files } from './files.js';
	import { openedFile } from './stores.js';
</script>

{#if $openedFile !== null}
	<div class="window">
		<div class="title-bar">{files[$openedFile]?.name}</div>
	</div>
{/if}

<style>
	.window {
		max-width: 320px;
		height: 240px;
		background-color: var(--color-bg-light);
	}

	.title-bar {
		display: flex;
		justify-content: center;
		background-color: var(--color-bg-dark);
		padding: 0.5rem;
	}
</style>
