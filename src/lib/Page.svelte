<script>
	import Iframe from './pages/Iframe.svelte';
	import ReadMe from './pages/ReadMe.svelte';
	import Notepad from './pages/Notepad.svelte';

	export let name;
	export let url;
</script>

{#if name === 'readme'}
	<ReadMe />
{:else if name === 'iframe'}
	<Iframe {name} {url} />
{:else if name === 'notepad'}
	<Notepad />
{/if}
