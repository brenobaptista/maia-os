<script>
	import { files } from './files.js';
	import { openedFile } from './stores.js';
</script>

{#if $openedFile !== null}
	<div class="window">
		<div class="title-bar">{files[$openedFile]?.name}</div>
		<div class="content" />
	</div>
{/if}

<style>
	.window {
		width: 320px;
		border: 1px solid var(--nord16);
		border-radius: 0.5rem;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.title-bar {
		display: flex;
		justify-content: center;
		background-color: var(--nord1);
		padding: 0.5rem;
		border-radius: 0.5rem 0.5rem 0 0;
	}

	.content {
		height: 240px;
		background-color: var(--nord0);
		border-radius: 0 0 0.5rem 0.5rem;
	}
</style>
