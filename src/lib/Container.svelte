<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		className,
		element = $bindable(),
		children
	}: { element?: HTMLDivElement; className?: string; children: Snippet<[]> } = $props();
</script>

<div
	class="{className} flex w-3/4 flex-col gap-2 rounded-xl border border-charcoal-blue bg-charcoal-blue/30 p-4 backdrop-blur-xs lg:w-1/2"
	bind:this={element}
>
	{@render children()}
</div>
