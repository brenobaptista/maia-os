<script>
	import Icon from './Icon.svelte';
	import Page from './Page.svelte';
	import { files, openedFile } from './stores/files';
</script>

<div class="window" class:window-open={$openedFile !== null}>
	<div class="title-bar">
		<div class="title-icon">
			<Icon name={files[$openedFile]?.icon ?? ''} width={16} height={16} />
			<div>{files[$openedFile]?.name ?? ''}</div>
		</div>
		<button id="quit" class="button" on:click={() => openedFile.set(null)} />
	</div>
	<div class="content">
		<Page name={files[$openedFile]?.content ?? ''} url={files[$openedFile]?.url ?? ''} />
	</div>
</div>

<style>
	.window {
		border: 1px solid var(--nord16);
		border-radius: 0.5rem;
		background-color: var(--nord0);
		box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 15px;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%) scale(0);
		transition: transform 0.1s ease-out;
	}
	.window-open {
		transform: translate(-50%, -50%) scale(1);
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

	.title-icon {
		display: flex;
		gap: 0.5rem;
		align-items: center;
	}

	.button {
		border: 1px solid var(--nord16);
		border-radius: 0.5rem;
		width: 1rem;
		height: 1rem;
	}

	#quit {
		background-color: var(--nord11);
	}
	#quit:hover {
		background-color: var(--nord12);
	}

	.content {
		background-color: var(--nord0);
		border-radius: 0 0 0.5rem 0.5rem;
	}
</style>
