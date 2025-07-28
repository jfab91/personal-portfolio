<script lang="ts">
	import { SectionHeadline, ExperienceTable } from '$components';
	import photo from '$assets/about-me.webp';
	import Button from '../Button.svelte';
	import { goto } from '$app/navigation';
	import type { WorkExperience } from '../../types/sanity';

	interface AboutProps {
		experience: WorkExperience[];
	}

	let { experience }: AboutProps = $props();
</script>

<section class="about-me mt-16">
	<SectionHeadline section="about-me">About Me</SectionHeadline>
	<div class="default-margin mt-8 mb-14 flex items-stretch justify-between">
		<img class="w-[42%] rounded-2xl object-cover" src={photo} alt="" />
		<div class="w-[55%] text-left">
			<p>
				Hey, I'm Fabricio, orem ipsum dolor sit amet, consectetur adipiscing elit. Integer at
				viverra nulla. Aenean eget ligula vestibulum libero cursus bibendum non rutrum eros.
				Suspendisse ut quam eget tellus malesuada dignissim eu sed odio. Nullam in leo massa. In et
				sapien sollicitudin, dictum nibh quis, volutpat metus.
			</p>
			<p>
				Etiam velit metus, bibendum vel mauris sed, pellentesque molestie urna. Pellentesque dictum
				dui quis orci lacinia elementum. Donec vehicula gravida nunc, quis auctor quam suscipit
				sollicitudin. Integer ultrices at ex quis tincidunt. Suspendisse vitae velit pretium dui
				aliquet hendrerit sit amet nec augue. Nunc egestas mattis ligula et dictum.
			</p>
			<p>
				Aliquam a diam fermentum, pulvinar sem sit amet, lacinia eros. Phasellus convallis ultrices
				quam, nec iaculis tellus condimentum vel. Etiam imperdiet dapibus magna, id molestie ipsum
				aliquam nec. Vestibulum id dapibus quam, ut iaculis odio. Quisque sodales vestibulum ipsum,
				ut laoreet urna tristique eu. Mauris vel eros ex. Nullam dapibus pulvinar pulvinar.
			</p>
			<Button class="mt-8" onclick={() => goto('/#contact-form')}>Tell me about your project</Button
			>
		</div>
	</div>
	<ExperienceTable {experience} />
</section>
