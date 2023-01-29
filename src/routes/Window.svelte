<script>
	import { files } from './files.js';
	import { openedFile } from './stores.js';
</script>

{#if $openedFile !== null}
	<div class="window">
		<div class="title-bar">
			<span class="title">{files[$openedFile]?.name}</span>
			<button id="quit" class="button" on:click={() => openedFile.set(null)} />
		</div>
		<div class="content" />
	</div>
{/if}

<style>
	.window {
		width: 320px;
		border: 1px solid var(--nord16);
		border-radius: 0.5rem;
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 15px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}

	.title-bar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		background-color: var(--nord1);
		border-bottom: 1px solid var(--nord16);
		padding: 0.5rem;
		border-radius: 0.5rem 0.5rem 0 0;
	}

	.title {
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.button {
		border: 1px solid var(--nord16);
		border-radius: 100%;
		width: 0.9rem;
		height: 0.9rem;
	}

	#quit {
		background-color: var(--nord11);
	}
	#quit:hover {
		background-color: var(--nord12);
	}

	.content {
		height: 240px;
		background-color: var(--nord0);
		border-radius: 0 0 0.5rem 0.5rem;
	}
</style>
