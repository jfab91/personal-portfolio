<script lang="ts">
	import { goto } from '$app/navigation';
	import { Button } from '$components';
</script>

<section class="default-margin pt-14">
	<h3 class="text-4xl/[1.1]">Hello I'm Fabricio</h3>
	<div class="bg-dark-gray mb-8 h-1 w-10"></div>
	<h1>I'm a Software Developer crafting intuitive and performant</h1>
	<h1 class="text-dark-gray mb-8">web experiencies</h1>
	<Button onclick={() => goto('/#contact-form')}>Let's talk</Button>
</section>
