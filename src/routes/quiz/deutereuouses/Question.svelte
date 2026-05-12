<script lang="ts">
	import gsap from 'gsap';

	import { onMount, type Snippet } from 'svelte';

	import type { Question } from '$lib/types';

	import Container from '$lib/Container.svelte';
	import AnswerButton from './AnswerButton.svelte';

	interface Props {
		question: Question;
		num: number;
		oncorrect: () => void;
		onwrong: () => void;
		children: Snippet<[]>;
	}

	let { question, num, oncorrect, onwrong, children }: Props = $props();

	let elem = $state() as HTMLDivElement;

	const shuffledAnswers = $derived(
		gsap.utils.shuffle([
			question.answers.a,
			question.answers.b,
			question.answers.c,
			question.answers.d
		])
	);

	let block = $state(false);

	export const fadeIn = (tl: gsap.core.Timeline) => {
		tl.fromTo(
			elem,
			{
				opacity: 0,
				scale: 0.75
			},
			{
				opacity: 1,
				scale: 1
			}
		);
	};

	onMount(() => {
		if (num > 1) {
			gsap.fromTo(
				elem,
				{
					opacity: 0,
					scale: 0.75
				},
				{
					opacity: 1,
					scale: 1
				}
			);
		}
	});

	const onclick = (isCorrect?: boolean) => {
		block = true;

		if (isCorrect === undefined) {
			isCorrect = false;
		}

		gsap
			.to(elem, {
				y: -500,
				duration: 1,
				ease: 'power2.in',
				delay: 0.25
			})
			.then(isCorrect ? oncorrect : onwrong);
	};
</script>

<Container bind:element={elem} className="z-0 relative {block ? 'pointer-events-none' : ''}">
	<h1 class="text-center text-2xl">{num}. {question.prompt}</h1>
	<p class="text-lg">
		[{question.citation.source.chapter}.{question.citation.source.verse}] {@render children()}
	</p>
	<div class="flex flex-col gap-1">
		<div class="flex gap-1">
			<AnswerButton
				answer={shuffledAnswers[0]}
				letter="Α"
				onclick={() => onclick(shuffledAnswers[0].isCorrect)}
			/>
			<AnswerButton
				answer={shuffledAnswers[1]}
				letter="Β"
				onclick={() => onclick(shuffledAnswers[1].isCorrect)}
			/>
		</div>
		<div class="flex gap-1">
			<AnswerButton
				answer={shuffledAnswers[2]}
				letter="Γ"
				onclick={() => onclick(shuffledAnswers[2].isCorrect)}
			/>
			<AnswerButton
				answer={shuffledAnswers[3]}
				letter="Δ"
				onclick={() => onclick(shuffledAnswers[3].isCorrect)}
			/>
		</div>
	</div>
</Container>
