<script>
	import ReadMe from './pages/ReadMe.svelte';

	export let name;
</script>

{#if name === 'readme'}
	<ReadMe />
{/if}
