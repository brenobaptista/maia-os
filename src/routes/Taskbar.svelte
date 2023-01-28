<script>
	import { time } from './stores.js';

	const formatter = new Intl.DateTimeFormat('en', {
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<div class="taskbar">{formatter.format($time)}</div>

<style>
	.taskbar {
		display: flex;
		justify-content: center;
		background-color: var(--nord16);
		padding: 0.5rem;
	}
</style>
