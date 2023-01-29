<script>
	import Taskbar from './Taskbar.svelte';
	import Desktop from './Desktop.svelte';
	import Window from './Window.svelte';
	import './styles.css';
</script>

<svelte:head>
	<title>Maia!_OS</title>
	<meta name="description" content="A website that simulates a fictional operating system" />
</svelte:head>

<Taskbar />
<Desktop />
<Window />
