<script lang="ts">
	import { SectionHeadline, ExperienceTable } from '$components';
	import photo from '$assets/about-me.webp';
	import cv from '$assets/CV_Fabricio_Vargas.pdf';
	import Button from '../Button.svelte';
	import { goto } from '$app/navigation';
	import type { WorkExperience } from '../../types/sanity';

	interface AboutProps {
		experience: WorkExperience[];
	}

	let { experience }: AboutProps = $props();

	function downloadCV() {
		const link = document.createElement('a');
		link.href = cv;
		link.download = 'CV_Fabricio_Vargas.pdf';
		link.click();
	}
</script>

<section class="about-me mx-[10vw] mt-14 max-w-[960px] lg:mx-[20vw]">
	<SectionHeadline section="about-me">About Me</SectionHeadline>
	<div class="mt-8 mb-14 flex flex-col items-stretch justify-between gap-6 md:flex-row md:gap-0">
		<img class="w-full rounded-2xl object-cover md:w-[42%]" src={photo} alt="Fabricio" />
		<div class="w-full text-left md:w-[55%]">
			<p class="mb-4">
				Hey there! I'm Fabricio, a backend software engineer passionate about building solutions
				that truly work. Over the past few years, I've been designing and scaling cloud-based
				systems using .NET, Node.js, NestJS, PostgreSQL, MongoDB, and Redis, while crafting solid
				architectures on Azure and DigitalOcean. I love seeing how a strong technical foundation can
				turn an idea into something that genuinely impacts people.
			</p>
			<p class="mb-4">
				More than just writing code, I enjoy understanding the "why" behind every project. I focus
				on creating efficient, secure, and maintainable products — but also meaningful ones. My
				curiosity has led me to explore areas like education, gamification, and automation, always
				driven by the idea that technology should make life simpler and better.
			</p>
			<p class="mb-4">
				I believe great engineering and clear communication go hand in hand. I enjoy working with
				teams that value collaboration, attention to detail, and ideas that are executed with care.
			</p>
			<p class="mb-4">
				If you're looking for someone who understands both the technical side and the purpose behind
				your project, I'd love to hear from you. Whether you're starting from scratch or want to
				take your system to the next level, let's talk and make it happen.
			</p>
			<Button class="mt-8" onclick={downloadCV}>Explore my background</Button>
		</div>
	</div>
	<ExperienceTable {experience} />
</section>
