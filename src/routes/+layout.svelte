<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.png';

	import Header from './Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="m-0 min-h-screen bg-black font-garamond text-white">
	<Header />
	<div class="flex flex-col items-center justify-center gap-2 p-4">
		{@render children()}
	</div>
</main>
