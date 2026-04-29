<script lang="ts">
	import type { Snippet } from 'svelte';

	import gsap from 'gsap';

	let {
		show = true,
		href,
		children
	}: { show?: boolean; href: string; children: Snippet<[]> } = $props();

	let quizButton!: HTMLAnchorElement;

	$effect(() => {
		if (show) {
			gsap.to(quizButton, {
				opacity: 1,
				duration: 0.5
			});
		}
	});
</script>

<a
	href={show ? href : ''}
	class="inline-block rounded-full border border-sky-700 bg-sky-600 px-3 py-1 font-ubuntu text-sky-100 opacity-0 transition-colors text-shadow-2xs text-shadow-sky-300 hover:bg-sky-900 {show
		? 'cursor-pointer'
		: 'cursor-default'}"
	bind:this={quizButton}>{@render children()}</a
>
