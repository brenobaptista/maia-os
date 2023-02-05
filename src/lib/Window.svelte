<script>
	import Icon from './Icon.svelte';
	import { files, openedFile } from './stores/files';
</script>

<div class="window" class:window-open={$openedFile !== null}>
	<div class="title-bar">
		<div class="title-icon">
			<Icon name={files[$openedFile]?.icon} width={13} height={13} />
			<div>{files[$openedFile]?.name ?? ''}</div>
		</div>
		<button id="quit" class="button" on:click={() => openedFile.set(null)} />
	</div>
	<div class="content">{files[$openedFile]?.content ?? ''}</div>
</div>

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
		opacity: 0;
		transition: opacity 0.1s ease-out;
	}
	.window-open {
		opacity: 1;
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
		height: 200px;
		background-color: var(--nord0);
		border-radius: 0 0 0.5rem 0.5rem;
		padding: 0.5rem;
	}
</style>
