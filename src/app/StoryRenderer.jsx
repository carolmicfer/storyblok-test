'use client';
import { StoryblokStory, useStoryblokState } from '@storyblok/react/rsc';

export default function StoryRenderer({ initialStory }) {
	const story = useStoryblokState(initialStory); // ativa o Bridge + hot updates
	return <StoryblokStory story={story} />;
}
