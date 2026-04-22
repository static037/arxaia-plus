<script lang="ts">
	import gsap from 'gsap';
	import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';
	import { onMount } from 'svelte';

	let welcome!: HTMLHeadingElement;

	gsap.registerPlugin(ScrambleTextPlugin);

	onMount(() => {
		gsap.to(welcome, {
			duration: 4,
			scrambleText: {
				text: "Χαῖρε, ξεῖνε, παρ' ἄμμι φιλήσεαι!",
				chars: 'αβγδεζηθικλμνξοπρστυφχψω!.,;',
				speed: 0.2,
				revealDelay: 0.5
			}
		});
	});
</script>

<h1
	class="cursor-help text-center font-garamond text-3xl underline decoration-gray-400 decoration-dotted"
	bind:this={welcome}
	title="Καλώς ήρθες, ξένε, πλησίον μας θα φιλοξενηθείς (Ομήρου Οδύσσεια)"
></h1>

<svelte:head>
	<title>Arxaia+ | Αρχική σελίδα</title>
</svelte:head>
