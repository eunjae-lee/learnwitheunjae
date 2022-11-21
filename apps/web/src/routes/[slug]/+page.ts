import { type ApiError, loadStory } from "@lwe/content";
import { error, type LoadEvent } from "@sveltejs/kit";

export async function load({ fetch, params }: LoadEvent) {
  if (!params.slug) {
    throw new Error(`slug is undefined (${JSON.stringify(params.slug)})`);
  }
  try {
    return await loadStory({ slug: params.slug, fetch });
  } catch (err) {
    if ((err as ApiError).status === 404) {
      throw error(404);
    }
  }
}
