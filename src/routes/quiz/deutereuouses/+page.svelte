<script lang="ts">
	import Question from './Question.svelte';
	import Highlight from '$lib/Highlight.svelte';

	import { questions as q } from '$lib/questions';

	let questions = $state(q);

	let question = $derived(questions[0]);

	let num = $state(1);

	const ondone = () => {
		questions = questions.slice(1);
		num++;
	};
</script>

{#if questions.length > 0}
	{#if question.difficulty === 'easy'}
		{#key num}
			<Question {question} {ondone} {num}>
				{question.citation.pre}<Highlight>{question.citation.highlighted}</Highlight>{question
					.citation.post}
			</Question>
		{/key}
	{/if}
{/if}

<svelte:head>
	<title>Ξενοφών | Αρχαία+</title>
</svelte:head>
