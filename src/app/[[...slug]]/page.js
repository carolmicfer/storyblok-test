import { getStoryblokApi } from '@/lib/storyblok';
import StoryRenderer from './StoryRenderer';

export default async function Home() {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories/home', {
		version: 'draft',
	});

	return (
		<div className="page">
			<StoryRenderer initialStory={data.story} />
		</div>
	);
}
