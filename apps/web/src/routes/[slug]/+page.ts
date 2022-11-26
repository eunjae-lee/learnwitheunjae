import { type ApiError, loadStories } from "@lwe/content";
import { error, type LoadEvent } from "@sveltejs/kit";

export async function load({ fetch, params }: LoadEvent) {
  if (!params.slug) {
    throw new Error(`slug is undefined (${JSON.stringify(params.slug)})`);
  }
  try {
    const full_slug = `${params.slug}/`;
    const result = await loadStories({
      slugs: [full_slug, `${params.slug}/episodes/*`],
      fetch,
    });
    return {
      ...result,
      full_slug,
    };
  } catch (err) {
    if ((err as ApiError).status === 404) {
      throw error(404);
    }
  }
}
