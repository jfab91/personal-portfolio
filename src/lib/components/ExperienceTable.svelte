<script lang="ts">
	import type { WorkExperience } from '../types/sanity';

	interface ExperienceTableProps {
		experience: WorkExperience[];
	}

	let { experience }: ExperienceTableProps = $props();
</script>

<section class="mt-14 mb-20 flex w-full flex-col justify-between gap-8 md:flex-row md:gap-0">
	<h2
		class="text-left text-[2.5rem] leading-[1.2] font-bold md:order-2 md:text-right md:text-[3.75rem]"
	>
		Past Work <br /> Experience
	</h2>
	<ul class="w-full md:order-1 md:w-1/2">
		{#each experience as job}
			<li class="work-item mb-0 border-b border-[#f0eded] pb-2">
				<article>
					<h3 class="mb-2 text-2xl leading-[1.3] font-medium">{job.title}</h3>
					<div class="flex flex-col gap-1 sm:flex-row sm:justify-between sm:gap-0">
						<p>{job.company}</p>
						<p class="text-dark-gray">
							{job.startDate.slice(0, 7)}
							{#if job.endDate}
								/ {job.endDate.slice(0, 7)}
							{:else}
								/ present
							{/if}
						</p>
					</div>
				</article>
			</li>
		{/each}
	</ul>
</section>

<style lang="postcss">
	.work-item:not(:first-of-type) {
		padding-top: 16px;
	}
</style>
