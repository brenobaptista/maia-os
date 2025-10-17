<script>
	let { name, url } = $props();
</script>

<div class="container">
	<iframe title={name} src={url} class="iframe"></iframe>
</div>

<style>
	.container {
		width: 768px;
		height: 500px;
	}
	@media (max-width: 768px) {
		.container {
			position: fixed;
			width: 100%;
			height: 100%;
		}
	}

	.iframe {
		width: 100%;
		height: 100%;
		border: none;
	}
</style>
