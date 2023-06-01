import { loadStory } from '@lwe/content';
import type { LoadEvent } from '@sveltejs/kit';

export async function load({ fetch }: LoadEvent) {
  const result = await loadStory({ slug: 'main', fetch });
  return {
    story: result.story,
  };
}
