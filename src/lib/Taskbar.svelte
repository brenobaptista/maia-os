<script>
	import { time } from './stores/time';

	const formatter = new Intl.DateTimeFormat('en', {
		weekday: 'short',
		month: 'short',
		day: 'numeric',
		hour12: true,
		hour: 'numeric',
		minute: '2-digit',
		second: '2-digit'
	});
</script>

<div class="taskbar">{formatter.format($time).replace(/,/g, '')}</div>

<style>
	.taskbar {
		display: flex;
		justify-content: center;
		background-color: var(--nord16);
		padding: 0.5rem;
		font-weight: 700;
	}
</style>
