<script>
	import Icon from '$lib/Icon.svelte';
</script>

<div class="container">
	<h1>README</h1>
	<p>This is a website that simulates a fictional operating system.</p>
	<div>
		<span>© {new Date().getFullYear()} Maia!_OS. </span>
		<span>
			Made with
			<Icon name="heart" width={13} height={13} />
			by{' '}
			<a href="https://www.brenobaptista.com/" target="_blank" rel="noreferrer noopener">
				Breno Baptista
			</a>
		</span>
	</div>
</div>

<style>
	.container {
		padding: 0.5rem;
		max-width: 300px;
		height: 200px;
	}

	@media (max-width: 768px) {
		.container {
			max-width: 100%;
			height: 100%;
		}
	}
</style>
