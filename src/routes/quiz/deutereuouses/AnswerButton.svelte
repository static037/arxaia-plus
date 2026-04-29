<script lang="ts">
	import type { Answer } from '$lib/types';

	let { answer, letter }: { answer: Answer; letter: 'Α' | 'Β' | 'Γ' | 'Δ' } = $props();

	let color: '' | 'bg-correct' | 'bg-wrong' = $state('');
</script>

<button
	class="w-1/2 cursor-pointer rounded-xl p-2 transition-colors {color}"
	onclick={() => (color = answer.isCorrect ? 'bg-correct' : 'bg-wrong')}
	>{letter}. {answer.text}</button
>
