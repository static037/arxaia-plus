<script lang="ts">
	import Question from './Question.svelte';
	import Highlight from '$lib/Highlight.svelte';
	import Stats from './Stats.svelte';

	import { questions as q } from '$lib/questions';

	import { onMount, type SvelteComponent } from 'svelte';

	import gsap from 'gsap';

	let questions = $state(gsap.utils.shuffle(q));
	let question = $derived(questions[0]);

	let num = $state(1);

	let statsComponent = $state() as SvelteComponent;
	let questionComponent = $state() as SvelteComponent;

	let correctCount = $state(0);
	let wrongCount = $state(0);

	const oncorrect = () => {
		correctCount++;
		num++;

		questions = questions.slice(1);
	};

	const onwrong = () => {
		wrongCount++;
		num++;

		questions = questions.slice(1);
	};

	onMount(() => {
		const tl = gsap.timeline();

		statsComponent.fadeIn(tl);
		questionComponent.fadeIn(tl);
	});
</script>

{#key num}
	<Stats {q} {num} {correctCount} {wrongCount} bind:this={statsComponent} />
{/key}
{#if questions.length > 0}
	{#key num}
		<Question {question} {oncorrect} {onwrong} {num} bind:this={questionComponent}>
			{question.citation.pre}<Highlight>{question.citation.highlighted}</Highlight>{question
				.citation.post}
		</Question>
	{/key}
{:else}
	<h1 class="text-8xl">{Math.round((correctCount / q.length) * 100)}%</h1>
	<p>Συγχαρητήρια!</p>
{/if}

<svelte:head>
	<title>Ξενοφών | Αρχαία+</title>
</svelte:head>
