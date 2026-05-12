<script module>
	let lastWidth = $state('0%');
</script>

<script lang="ts">
	import Container from '$lib/Container.svelte';

	import type { Question } from '$lib/types';

	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let {
		q,
		num,
		correctCount,
		wrongCount
	}: { q: Question[]; num: number; correctCount: number; wrongCount: number } = $props();

	let elem = $state() as HTMLDivElement;
	let bar!: HTMLDivElement;

	export const fadeIn = (tl: gsap.core.Timeline) => {
		tl.fromTo(
			elem,
			{
				opacity: 0,
				scale: 0.75
			},
			{
				opacity: 1,
				scale: 1
			}
		);
	};

	onMount(() => {
		gsap.fromTo(
			bar,
			{
				width: lastWidth
			},
			{
				width: `${((num - 1) / q.length) * 100}%`
			}
		);

		lastWidth = `${((num - 1) / q.length) * 100}%`;
	});
</script>

<Container className="z-20 transition-colors p-0" bind:element={elem}>
	<div class="flex flex-row gap-1">
		<p class="flex-1">
			Ερωτήσεις: {num <= q.length ? num : q.length}/{q.length}
		</p>
		<p>Σωστές: {correctCount}</p>
		<p>Λάθος: {wrongCount}</p>
	</div>
	<div class="relative h-1 w-full rounded-full bg-charcoal-blue">
		<div class="h-1 w-0 rounded-full bg-white transition" bind:this={bar}></div>
	</div>
</Container>
