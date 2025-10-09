<script>
	import { writable } from 'svelte/store';

	const content = writable('');
</script>

<div class="container">
	<textarea id="notepad-content" name="notepad-content" bind:value={$content} placeholder="Click here and start typing..." />
</div>

<style>
	.container {
		padding: 0.5rem;
		width: 500px;
		height: 350px;
		display: flex;
	}
	@media (max-width: 768px) {
		.container {
			width: calc(100% - 1rem);
			height: 100vh;
		}
	}

	textarea {
		width: 100%;
		background-color: var(--nord0);
		color: var(--nord6);
		border: none;
		font-size: 14px;
		resize: none;
	}
	textarea:focus {
		outline: none;
	}
</style>
