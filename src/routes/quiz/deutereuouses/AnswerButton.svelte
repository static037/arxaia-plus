<script lang="ts">
	import type { Answer } from '$lib/types';

	let {
		answer,
		letter,
		onclick
	}: { answer: Answer; letter: 'Α' | 'Β' | 'Γ' | 'Δ'; onclick: () => void } = $props();

	let colors: '' | 'text-black bg-correct' | 'text-black bg-wrong' = $state('');
</script>

<button
	class="w-1/2 cursor-pointer rounded-xl p-2 transition-colors {colors}"
	onclick={() => {
		colors = `text-black ${answer.isCorrect ? 'bg-correct' : 'bg-wrong'}`;
		onclick();
	}}>{letter}. {answer.text}</button
>
