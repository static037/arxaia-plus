<script lang="ts">
	import gsap from 'gsap';
	import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

	import { onMount } from 'svelte';

	import Tooltip from './Tooltip.svelte';

	let welcome!: HTMLHeadingElement;
	let quizButton!: HTMLAnchorElement;

	let pointer = $state({ x: 0, y: 0 });

	let showTooltip = $state(false);
	let showLink = $state(false);

	gsap.registerPlugin(ScrambleTextPlugin);

	onMount(() => {
		gsap
			.to(welcome, {
				duration: 4,
				scrambleText: {
					text: "Χαῖρε, ξεῖνε, παρ' ἄμμι φιλήσεαι!",
					chars: 'αβγδεζηθικλμνξοπρστυφχψω',
					speed: 0.5
				}
			})
			.then(() => {
				showLink = true;
				gsap.to(quizButton, {
					opacity: 1,
					duration: 0.5
				});
			});
	});
</script>

<div class="flex flex-col items-center justify-center gap-2">
	<!-- svelte-ignore a11y_missing_content -->
	<h1
		class="inline-block cursor-help self-center font-garamond text-3xl underline decoration-gray-400 decoration-dotted"
		bind:this={welcome}
		onmousemove={(e) => {
			showTooltip = true;
			pointer.x = e.clientX;
			pointer.y = e.clientY;
		}}
		onmouseleave={() => (showTooltip = false)}
	></h1>
	<a
		href={showLink ? 'quiz' : ''}
		class="inline-block rounded-full border border-sky-700 bg-sky-600 px-3 py-1 text-sky-100 opacity-0 transition-colors text-shadow-2xs text-shadow-sky-300 hover:bg-sky-900 {showLink
			? ''
			: 'cursor-default'}"
		bind:this={quizButton}>Ξεκίνα το quiz</a
	>
	<Tooltip x={pointer.x - 1175} y={pointer.y - 225} show={showTooltip}
		>Καλώς ήρθες, ξένε, πλησίον μας θα φιλοξενηθείς (Ομήρου Οδύσσεια)</Tooltip
	>
</div>

<svelte:head>
	<title>Arxaia+ | Αρχική σελίδα</title>
</svelte:head>
