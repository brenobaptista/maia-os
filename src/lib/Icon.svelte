<script>
	import RSS from './icons/RSS.svelte';
	import FileText from './icons/FileText.svelte';
	import Heart from './icons/Heart.svelte';
	import Logo from './icons/Logo.svelte';
	import Edit from './icons/Edit.svelte';

	export let name;
	export let width;
	export let height;
</script>

{#if name === 'file-text'}
	<FileText {width} {height} />
{:else if name === 'logo'}
	<Logo {width} {height} />
{:else if name === 'heart'}
	<Heart {width} {height} />
{:else if name === 'rss'}
	<RSS {width} {height} />
{:else if name === 'edit'}
	<Edit {width} {height} />
{/if}
