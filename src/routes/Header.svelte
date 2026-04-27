<script lang="ts">
	import thucydides from '$lib/assets/thucydides.png';
	import xenofwn from '$lib/assets/xenofwn.png';

	import Person from './Person.svelte';
</script>

<header class="flex border-b border-charcoal-blue bg-charcoal-blue/50">
	<Person src={thucydides} alt="Θουκυδίδης">ΘΟΥΚΥΔΙΔΗΣ</Person>
	<div class="flex flex-1 justify-center p-3">
		<a
			href="/"
			class="rounded-2xl px-4 py-2 text-center font-stoix text-2xl transition-colors hover:bg-white hover:text-black"
			>ARXAIA+</a
		>
	</div>
	<Person src={xenofwn} alt="Ξενοφών">ΞΕΝΟΦΩΝ</Person>
</header>
