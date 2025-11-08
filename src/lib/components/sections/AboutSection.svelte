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
				Hey there! I'm Fabricio, a backend software engineer passionate about building solutions
				that truly work. Over the past few years, I’ve been designing and scaling cloud-based
				systems using .NET, Node.js, NestJS, PostgreSQL, MongoDB, and Redis, while crafting solid
				architectures on Azure and DigitalOcean. I love seeing how a strong technical foundation can
				turn an idea into something that genuinely impacts people.
			</p>
			<p>
				More than just writing code, I enjoy understanding the “why” behind every project. I focus
				on creating efficient, secure, and maintainable products — but also meaningful ones. My
				curiosity has led me to explore areas like education, gamification, and automation, always
				driven by the idea that technology should make life simpler and better.
			</p>
			<p>
				I believe great engineering and clear communication go hand in hand. I enjoy working with
				teams that value collaboration, attention to detail, and ideas that are executed with care.
			</p>
			<p>
				If you’re looking for someone who understands both the technical side and the purpose behind
				your project, I’d love to hear from you. Whether you’re starting from scratch or want to
				take your system to the next level, let’s talk and make it happen.
			</p>
			<Button class="mt-8" onclick={() => goto('/#contact-form')}>Tell me about your project</Button
			>
		</div>
	</div>
	<ExperienceTable {experience} />
</section>
