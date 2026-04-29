<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet<[]> } = $props();
</script>

<span class="bg-yellow-400/30 font-bold">{@render children()}</span>
