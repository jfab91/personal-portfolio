import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: 'muezgq83',
	dataset: 'production',
	useCdn: true,
	apiVersion: '2025-07-18'
};

const sanityClient = createClient(config);

export default sanityClient;
