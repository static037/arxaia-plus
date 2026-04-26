<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/thucydides.png';

	import Header from '$lib/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="m-0 min-h-screen bg-black font-ubuntu text-white">
	<Header />
	<div class="p-4">
		{@render children()}
	</div>
</main>
