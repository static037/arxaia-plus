<script lang="ts">
	import type { Snippet } from 'svelte';

	let { children }: { children: Snippet<[]> } = $props();
</script>

<div
	class="flex w-1/2 flex-col gap-2 rounded-xl border border-charcoal-blue bg-charcoal-blue/30 p-4 backdrop-blur-xs"
>
	{@render children()}
</div>
