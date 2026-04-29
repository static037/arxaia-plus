<script lang="ts">
	import type { Snippet } from 'svelte';

	import type { Answers } from '$lib/types';

	import Container from '$lib/Container.svelte';
	import AnswerButton from './AnswerButton.svelte';

	let {
		num,
		title,
		answers,
		children
	}: { num: number; title: string; answers: Answers; children: Snippet<[]> } = $props();
</script>

<Container>
	<h1 class="text-center text-2xl">{num}. {title}</h1>
	<p class="text-lg">
		{@render children()}
	</p>
	<div class="flex flex-col gap-1">
		<div class="flex gap-1">
			<AnswerButton answer={answers.a} letter="Α" />
			<AnswerButton answer={answers.b} letter="Β" />
		</div>
		<div class="flex gap-1">
			<AnswerButton answer={answers.c} letter="Γ" />
			<AnswerButton answer={answers.d} letter="Δ" />
		</div>
	</div>
</Container>
