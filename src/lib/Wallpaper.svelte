<script>
	import Icon from './Icon.svelte';
</script>

<div class="wallpaper">
	<Icon name="logo" width={240} height={240} />
</div>

<style>
	.wallpaper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		color: var(--nord8);
	}
</style>
