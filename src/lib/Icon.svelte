<script>
	import FileText from './icons/FileText.svelte';
	import Logo from './icons/Logo.svelte';

	export let name;
	export let width;
	export let height;
</script>

{#if name === 'file-text'}
	<FileText {width} {height} />
{:else if name === 'logo'}
	<Logo {width} {height} />
{/if}
