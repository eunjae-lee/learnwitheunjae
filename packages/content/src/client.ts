import { PUBLIC_APP_ENVIRONMENT } from "$env/static/public";
import { env } from "$env/dynamic/public";
import RichTextResolver from "./richText";
import type { Story } from "./types";

type LoadStoryParams = {
  slug: string;
  fetch: typeof fetch;
};

export const IS_PREVIEW_MODE = PUBLIC_APP_ENVIRONMENT !== "production";

export async function loadStory({ slug, fetch }: LoadStoryParams) {
  const accessToken = env.PUBLIC_STORYBLOK_API_KEY;
  const version = IS_PREVIEW_MODE ? "draft" : "published";
  const url = `https://api.storyblok.com/v2/cdn/stories/${slug}?token=${accessToken}&version=${version}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error(
      `loadStory(${slug}) failed with ${response.status}(${response.statusText})`
    );
  }
  return (await response.json()) as { story: Story };
}

type PreviewCallback = (story: any) => void;

export async function enablePreview(
  storyId: number,
  callback: PreviewCallback
) {
  // @ts-expect-error bridge is not typed
  const { StoryblokBridge, location } = window;
  const storyblokInstance = new StoryblokBridge();

  storyblokInstance.on(["input", "published", "change"], (event) => {
    if (event.action === "input" && event.story.id === storyId) {
      callback(event.story);
    } else if (
      (event.action === "change" || event.action === "published") &&
      event.storyId === storyId
    ) {
      location.reload();
    }
  });
}

export function renderRichText(data) {
  return new RichTextResolver().render(data);
}
