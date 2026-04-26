<script lang="ts">
	import thucydides from '$lib/assets/thucydides.png';
	import xenofwn from '$lib/assets/xenofwn.png';

	import gsap from 'gsap';

	let thucydidesImage!: HTMLImageElement;
	let showthucydidesText = $state(false);

	let xenofwnImage!: HTMLImageElement;
	let showXenofwnText = $state(false);

	let tl = gsap.timeline();

	const moveUp = (person: 'thucydides' | 'xenofwn') => {
		const image = person === 'thucydides' ? thucydidesImage : xenofwnImage;

		tl.to(image, {
			y: -12
		})
			.to({}, { duration: 0.25 })
			.then(() => {
				if (gsap.getProperty(image, 'y') === -12) {
					person === 'thucydides' ? (showthucydidesText = true) : (showXenofwnText = true);
				}
			});
	};

	const moveDown = (person: 'thucydides' | 'xenofwn') => {
		person === 'thucydides' ? (showthucydidesText = false) : (showXenofwnText = false);
		tl.to({}, { duration: 0.25 }).to(person === 'thucydides' ? thucydidesImage : xenofwnImage, {
			y: 0
		});
	};
</script>

<header class="flex border-b border-charcoal-blue bg-charcoal-blue/50">
	<div class="relative">
		<img
			src={thucydides}
			alt="Θουκυδίδης"
			class="z-10 h-18"
			onmouseover={() => moveUp('thucydides')}
			onmouseout={() => moveDown('thucydides')}
			onfocus={() => moveUp('thucydides')}
			onblur={() => moveDown('thucydides')}
			bind:this={thucydidesImage}
		/>
		<p
			class="absolute bottom-0 font-stoix text-[0.7rem] transition-opacity {showthucydidesText
				? 'opacity-100'
				: 'opacity-0'}"
		>
			ΘΟΥΚΥΔΙΔΗΣ
		</p>
	</div>
	<div class="flex flex-1 justify-center p-3">
		<a
			href="/"
			class="rounded-2xl px-4 py-2 text-center font-stoix text-2xl transition-colors hover:bg-white hover:text-black"
			>ARXAIA+</a
		>
	</div>
	<div class="relative">
		<img
			src={xenofwn}
			alt="Ξενοφών"
			class="z-10 h-18"
			onmouseover={() => moveUp('xenofwn')}
			onmouseout={() => moveDown('xenofwn')}
			onfocus={() => moveUp('xenofwn')}
			onblur={() => moveDown('xenofwn')}
			bind:this={xenofwnImage}
		/>
		<p
			class="transit absolute bottom-0 left-2 block font-stoix text-[0.7rem] transition-opacity {showXenofwnText
				? 'opacity-100'
				: 'opacity-0'}"
		>
			ΞΕΝΟΦΩΝ
		</p>
	</div>
</header>
