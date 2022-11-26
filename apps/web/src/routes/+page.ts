import { loadStories } from "@lwe/content";
import type { LoadEvent } from "@sveltejs/kit";

export async function load({ fetch }: LoadEvent) {
  const slugs = ["sinabro-js/", "pd/"];
  const result = await loadStories({
    slugs,
    fetch,
    options: {
      excluding_fields: "episodes",
    },
  });
  return {
    stories: result.stories.sort((a) => (a.slug === "sinabro-js" ? -1 : 1)),
  };
}
