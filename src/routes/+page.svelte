<script lang="ts">
	import gsap from 'gsap';
	import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

	import { onMount } from 'svelte';

	import Tooltip from './Tooltip.svelte';
	import Link from '$lib/Link.svelte';

	let welcome!: HTMLHeadingElement;

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
			});
	});
</script>

<!-- svelte-ignore a11y_missing_content -->
<h1
	class="inline-block cursor-help self-center text-3xl underline decoration-gray-400 decoration-dotted"
	bind:this={welcome}
	onmousemove={(e) => {
		showTooltip = true;
		pointer.x = e.clientX;
		pointer.y = e.clientY;
	}}
	onmouseleave={() => (showTooltip = false)}
></h1>
<Link show={showLink} href="quiz">Ξεκίνα το quiz</Link>
<Tooltip x={pointer.x - 1175} y={pointer.y - 225} show={showTooltip}
	>Καλώς ήρθες, ξένε, πλησίον μας θα φιλοξενηθείς (Ομήρου Οδύσσεια)</Tooltip
>

<svelte:head>
	<title>Αρχική σελίδα | Αρχαία+</title>
</svelte:head>
