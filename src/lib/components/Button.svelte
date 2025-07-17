<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		children: Snippet;
		onclick: (e: MouseEvent) => void | (() => void) | Promise<void>;
		class?: string;
	}

	let { children, class: className, ...props }: ButtonProps = $props();
</script>

<button
	class={`font-inter-tight rounded-lg bg-black pt-3.5 pr-10 pb-3.5 pl-10 text-2xl font-medium text-white ${className}`}
	{...props}
>
	{@render children()}
</button>
