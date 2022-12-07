import { type ApiError, loadStory } from "@lwe/content";
import { error, type LoadEvent } from "@sveltejs/kit";

export async function load({ fetch }: LoadEvent) {
  try {
    const result = await loadStory({ slug: "/about", fetch });
    return {
      story: result.story,
    };
  } catch (err) {
    if ((err as ApiError).status === 404) {
      throw error(404);
    }
  }
}
