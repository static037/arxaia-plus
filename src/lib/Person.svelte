<script lang="ts">
	import gsap from 'gsap';

	import type { Snippet } from 'svelte';

	let { src, alt, children }: { src: string; alt: string; children: Snippet<[]> } = $props();

	let image!: HTMLImageElement;
	let showText = $state(false);

	let tl = gsap.timeline();

	function moveUp() {
		tl.to(image, {
			y: -12
		})
			.to({}, { duration: 0.25 })
			.then(() => {
				if (gsap.getProperty(image, 'y') === -12) {
					showText = true;
				}
			});
	}

	function moveDown() {
		showText = false;
		tl.to({}, { duration: 0.25 }).to(image, {
			y: 0
		});
	}
</script>

<div class="relative flex justify-center">
	<img
		{src}
		{alt}
		class="z-10 h-18"
		onmouseover={moveUp}
		onmouseout={moveDown}
		onfocus={moveUp}
		onblur={moveDown}
		bind:this={image}
	/>
	<p
		class="absolute bottom-0 text-center font-stoix text-[0.7rem] transition-opacity {showText
			? 'opacity-100'
			: 'opacity-0'}"
	>
		{@render children()}
	</p>
</div>
