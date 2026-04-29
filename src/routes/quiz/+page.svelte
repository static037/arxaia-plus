<script lang="ts">
	import thucydides from '$lib/assets/thucydides.png';
	import xenophon from '$lib/assets/xenophon.png';

	import Link from '$lib/Link.svelte';
	import Person from '$lib/Person.svelte';
	import Container from '$lib/Container.svelte';
</script>

<Container>
	<h1 class="text-center text-2xl">Προετοιμασία quiz</h1>
	<!-- TODO: Add customization -->
	<div class="flex">
		<div class="flex w-1/2 flex-col items-center justify-center gap-2 p-2">
			<Person src={thucydides} alt="Θουκυδίδης">ΘΟΥΚΥΔΙΔΗΣ</Person>
			<p class="text-lg">Υπό κατασκευή</p>
		</div>
		<div
			class="flex w-1/2 flex-col items-center justify-center gap-2 border-l border-l-charcoal-blue p-2"
		>
			<Person src={xenophon} alt="Ξενοφών">ΞΕΝΟΦΩΝ</Person>
			<Link href="/quiz/deutereuouses">Δευτερεύουσες προτάσεις</Link>
		</div>
	</div>
</Container>

<svelte:head>
	<title>Quiz | Αρχαία+</title>
</svelte:head>
