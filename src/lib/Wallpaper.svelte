<script>
	import Logo from './icons/Logo.svelte';
</script>

<div class="wallpaper">
	<Logo width={240} height={240} />
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
