<script lang="ts">
	import thucydides from '$lib/assets/thucydides.png';
	import xenophon from '$lib/assets/xenophon.png';

	import Person from '$lib/Person.svelte';

	import gsap from 'gsap';

	let logo!: HTMLAnchorElement;

	const onmouseenter = () => {
		gsap.to(logo, {
			scale: 1.25
		});
	};

	const onmouseleave = () => {
		gsap.to(logo, {
			scale: 1
		});
	};
</script>

<header
	class="relative z-50 flex border-b border-charcoal-blue bg-charcoal-blue/50 backdrop-blur-sm"
>
	<Person src={thucydides} alt="Θουκυδίδης">ΘΟΥΚΥΔΙΔΗΣ</Person>
	<div class="flex flex-1 justify-center p-3">
		<a
			href="/"
			class="px-4 py-2 text-center font-stoix text-2xl"
			{onmouseenter}
			{onmouseleave}
			bind:this={logo}>ΑΡΧΑΙΑ+</a
		>
	</div>
	<Person src={xenophon} alt="Ξενοφών">ΞΕΝΟΦΩΝ</Person>
</header>
