import { loadStories, type Story } from "@lwe/content";
import type { LoadEvent } from "@sveltejs/kit";

export async function load({ fetch }: LoadEvent) {
  const slugs = ["sinabro-js", "pd"];
  const result = await loadStories({ slugs, fetch });
  const storyMap = result.stories.reduce((acc, item) => {
    acc[item.slug] = item;
    return acc;
  }, {} as Record<string, Story>);
  return { storyMap };
}
