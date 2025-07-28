import type { PageLoad } from './$types';
import sanityClient from '$lib/utils/sanity';
import type { WorkExperience } from '../lib/types/sanity';

export const load: PageLoad = async () => {
	const query = '*[_type== "workExperience"] | order(startDate desc)';
	const experience: WorkExperience[] = await sanityClient.fetch(query);

	return { experience };
};
