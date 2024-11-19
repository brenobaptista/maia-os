<script>
	import Iframe from './pages/Iframe.svelte';
	import ReadMe from './pages/ReadMe.svelte';

	export let name;
	export let url;
</script>

{#if name === 'readme'}
	<ReadMe />
{:else if name === 'iframe'}
	<Iframe {name} {url} />
{/if}
