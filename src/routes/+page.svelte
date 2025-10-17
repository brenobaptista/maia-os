<script>
	import Taskbar from '$lib/Taskbar.svelte';
	import Desktop from '$lib/Desktop.svelte';
	import Wallpaper from '$lib/Wallpaper.svelte';
	import Window from '$lib/Window.svelte';
	import '$lib/styles.css';

	function preventContextMenu(e) {
		e.preventDefault();
	}
</script>

<svelte:head>
	<title>Maia!_OS</title>
	<meta name="description" content="A website that simulates a fictional operating system" />
</svelte:head>

<svelte:body oncontextmenu={preventContextMenu} />

<Taskbar />
<Desktop />
<Wallpaper />
<Window />
