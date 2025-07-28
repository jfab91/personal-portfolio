<script lang="ts">
	import { HeroSection, AboutSection, ExperienceTable } from '$components';

	const { data } = $props();
	let { experience } = data;
</script>

<HeroSection />
<AboutSection {experience} />
