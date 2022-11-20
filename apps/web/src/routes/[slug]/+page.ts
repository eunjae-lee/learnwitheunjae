import { loadStory } from "@lwe/content";
import type { LoadEvent } from "@sveltejs/kit";

export async function load({ fetch, params }: LoadEvent) {
  if (!params.slug) {
    throw new Error(`slug is undefined (${JSON.stringify(params.slug)})`);
  }
  return await loadStory({ slug: params.slug, fetch });
}
