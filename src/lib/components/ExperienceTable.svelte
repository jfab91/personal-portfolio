<script lang="ts">
	import type { WorkExperience } from '../types/sanity';

	interface ExperienceTableProps {
		experience: WorkExperience[];
	}

	let { experience }: ExperienceTableProps = $props();
</script>

<section class="default-margin mt-8 flex w-full justify-between">
	<ul class="w-1/2">
		{#each experience as job}
			<li class="work-item mb-0 border-b border-[#f0eded] pb-2">
				<article>
					<h3 class="mb-2 font-medium">{job.title}</h3>
					<div class="flex justify-between">
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
	<h2 class="text-right">Past Work <br /> Experience</h2>
</section>

<style lang="postcss">
	.work-item:not(:first-of-type) {
		padding-top: 16px;
	}
</style>
