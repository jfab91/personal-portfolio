<script lang="ts">
	import type { Snippet } from 'svelte';

	interface SectionHeadlineProps {
		children: Snippet;
		section: string;
	}

	let { section, children }: SectionHeadlineProps = $props();
</script>

<div class="default-margin" id={section}>
	<h2 class="text-4xl/[1.1]">{@render children()}</h2>
	<div class="bg-dark-gray h-1 w-10"></div>
</div>
