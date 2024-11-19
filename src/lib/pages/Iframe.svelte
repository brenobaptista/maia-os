<script>
	export let name;
	export let url;
</script>

<div class="container">
	<iframe title={name} src={url} class="iframe" />
</div>

<style>
	.container {
		width: 400px;
		height: 500px;
	}

	.iframe {
		width: 100%;
		height: 100%;
		border: none;
	}

	@media (max-width: 768px) {
		.container {
			position: fixed;
			width: 100%;
			height: 100%;
		}
	}
</style>
