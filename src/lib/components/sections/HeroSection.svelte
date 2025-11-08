<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$components';
	import { onMount } from 'svelte';

	let visible = false;

	const text1 = "I'm a Software Developer crafting intuitive and performant";
	const text2 = 'web experiencies';
	const words1 = text1.split(' ');
	const words2 = text2.split(' ');

	onMount(() => {
		visible = true;
	});
</script>

<section class="default-margin pt-14">
	<h3 class="text-4xl/[1.1]">Hello I'm Fabricio</h3>
	<div class="bg-dark-gray mb-8 h-1 w-10"></div>
	<h1>
		{#each words1 as word, i}
			<span class="word inline-block" class:visible style="--delay: {i * 0.1}s">
				{word}
			</span>{' '}
		{/each}
	</h1>
	<h1 class="text-dark-gray mb-8">
		{#each words2 as word, i}
			<span class="word inline-block" class:visible style="--delay: {(words1.length + i) * 0.1}s">
				{word}
			</span>{' '}
		{/each}
	</h1>
	<Button onclick={() => goto('/#contact-form')}>Let's talk</Button>
</section>

<style>
	.word {
		opacity: 0;
		transform: translateX(-20px);
		transition: all 0.6s ease-in;
		transition-delay: var(--delay);
	}

	.word.visible {
		opacity: 1;
		transform: translateX(0);
	}
</style>
